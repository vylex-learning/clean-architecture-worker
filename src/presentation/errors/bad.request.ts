export class BadRequest extends Error {
  constructor(paramName: string) {
    super(`Invalid param: ${paramName}`);
    this.name = 'BadRequest';
  }
}
