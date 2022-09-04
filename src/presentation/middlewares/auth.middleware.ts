import { forbidden, ok, serverError } from '@/presentation/helpers/http.helper';
import { AccessDeniedError } from '@/presentation/errors/access.denied.error';
import { LoadAccountByToken } from '@/domain/usecases/account/load.account.by.token';
import { Middleware } from '@/presentation/protocols/middleware';
import { IHttpResponse } from '@/presentation/protocols/http';

export class AuthMiddleware implements Middleware {
  constructor(
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly role?: string,
  ) {}

  async handle(request: AuthMiddleware.Request): Promise<IHttpResponse> {
    try {
      const { accessToken } = request;
      if (accessToken) {
        const account = await this.loadAccountByToken.load(
          accessToken,
          this.role,
        );
        if (account) {
          return ok({ accountId: account.id });
        }
      }
      return forbidden(new AccessDeniedError());
    } catch {
      return serverError('auth.middleware.error');
    }
  }
}

export namespace AuthMiddleware {
  export type Request = {
    accessToken?: string;
  };
}
