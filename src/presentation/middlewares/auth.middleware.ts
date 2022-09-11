import { LoadAccountByToken } from '@/domain/usecases/account/load.account.by.token';
import { forbidden, ok, serverError } from '@/presentation/helpers/http.helper';
import { AccessDeniedError } from '@/presentation/errors/access.denied.error';
import { IMiddleware } from '@/presentation/protocols/middleware';
import { IHttpResponse } from '@/presentation/protocols/http';

export class AuthMiddleware implements IMiddleware {
  constructor(
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly role?: string,
  ) {}

  async handle(request: AuthMiddleware.Request): Promise<IHttpResponse> {
    try {
      const { Authorization } = request.headers;
      if (Authorization) {
        const account = await this.loadAccountByToken.load(
          Authorization,
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
    headers: {
      Authorization: string;
    };
  };
}
