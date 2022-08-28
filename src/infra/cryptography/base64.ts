export class Base64Adapter {
  decrypt(text: string): string {
    return atob(text);
  }

  encrypt(text: string): string {
    return btoa(text).replace(/=/g, '');
  }

  isBase64(text: string): boolean {
    try {
      return this.encrypt(this.decrypt(text)).replace(/=/g, '') == text;
    } catch {
      return false;
    }
  }
}
