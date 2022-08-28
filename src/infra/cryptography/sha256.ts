export class Sha256Adapter {
  constructor(private readonly encoder: TextEncoder = new TextEncoder()) {}

  async encrypt(text: string): Promise<string> {
    const utf8 = this.encoder.encode(text);
    return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((bytes) => bytes.toString(16).padStart(2, '0'))
        .join('');
      return hashHex;
    });
  }
}
