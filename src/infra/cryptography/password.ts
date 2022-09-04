import { EnvironmentSingleton } from '@/main/config/environments.singleton';
import { Sha256Adapter } from '@/infra/cryptography/sha256';

export class PasswordAdapter {
  constructor(
    private readonly sha256Adapter: Sha256Adapter = new Sha256Adapter(),
  ) {}

  async encrypt(password: string): Promise<string> {
    const cryptedPassword = await this.sha256Adapter.encrypt(password);
    const reversedCryptedPassword = cryptedPassword
      .split('')
      .reverse()
      .join('');

    const envInstance = EnvironmentSingleton.getInstance();
    const env = envInstance.getEnv();

    const passwordCryptedAgain = await this.sha256Adapter.encrypt(
      reversedCryptedPassword + env?.JWT_SECRET_KEY,
    );
    return passwordCryptedAgain;
  }
}
