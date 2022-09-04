export interface IEncrypter {
  encrypt: (plaintext: string) => Promise<string>;
}
