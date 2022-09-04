export interface IDecrypter {
  decrypt: (ciphertext: string) => Promise<string>;
}
