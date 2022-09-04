import { EnvironmentSingleton } from '@/main/config/environments.singleton';
import { Base64Adapter } from '@/infra/cryptography/base64';
import { Sha256Adapter } from '@/infra/cryptography/sha256';
import { IJwtHandler } from '@/presentation/protocols/jwt';
import { name } from '../../../package.json';

const envInstance = EnvironmentSingleton.getInstance();

export const JWTHeader = {
  alg: 'HS256',
  typ: 'JWT',
};

export class JwtTokenHandler implements IJwtHandler {
  constructor(
    private readonly base64Adapter: Base64Adapter = new Base64Adapter(),
    private readonly sha256Adapter: Sha256Adapter = new Sha256Adapter(),
  ) {}

  async generate(jWTPayload: any): Promise<string> {
    const env = envInstance.getEnv();
    const now = Math.floor(Date.now() / 1000);
    jWTPayload.nbf = now;
    jWTPayload.iss = name;
    jWTPayload.exp = now + 2 * (60 * 60);
    const header = await this.base64Adapter.encrypt(JSON.stringify(JWTHeader));
    const payload = await this.base64Adapter.encrypt(
      JSON.stringify(jWTPayload),
    );
    const signature = await this.sha256Adapter.encrypt(
      `${header}.${payload + (env?.JWT_SECRET_KEY || '')}`,
    );
    return `${header}.${payload}.${signature}`;
  }

  async validate(authorizationHeader: string): Promise<boolean> {
    const env = envInstance.getEnv();
    const jwt = authorizationHeader.substring(6).trim();
    const parts = jwt.split('.');
    if (parts.length != 3) return false;

    const correctHeaderFormat = await this.base64Adapter.isBase64(parts[0]);
    if (!correctHeaderFormat) return false;

    const correctPayloadFormat = await this.base64Adapter.isBase64(parts[1]);
    if (!correctPayloadFormat) return false;

    const header = parts[0];
    const payload = JSON.parse(await this.base64Adapter.decrypt(parts[1]));
    const now = Math.floor(Date.now() / 1000);

    if ((payload.exp || 0) <= now) return false;

    if ((payload.nbf || 0) > now) return false;

    const signature = parts[2];
    const payloadString = parts[1];
    const realSignature = await this.sha256Adapter.encrypt(
      `${header}.${payloadString + env?.JWT_SECRET_KEY}`,
    );
    return signature == realSignature;
  }
}
