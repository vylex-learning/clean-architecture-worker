export interface IJwtHandler {
  generate: (jWTPayload: any) => Promise<string>;
  validate: (authorizationHeader: string) => Promise<boolean>;
}
