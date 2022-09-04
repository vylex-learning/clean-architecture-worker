import { IDecrypter } from '@/data/protocols/cryptography/decrypter';
import { IEncrypter } from '@/data/protocols/cryptography/encrypter';

export class Base64Adapter implements IDecrypter, IEncrypter {
  async decrypt(text: string): Promise<string> {
    return atob(text);
  }

  async encrypt(text: string): Promise<string> {
    return btoa(text).replace(/=/g, '');
  }

  async isBase64(text: string): Promise<boolean> {
    try {
      const decryptedText = await this.decrypt(text);
      const encryptedText = await this.encrypt(decryptedText);
      return encryptedText.replace(/=/g, '') == text;
    } catch {
      return false;
    }
  }
}
