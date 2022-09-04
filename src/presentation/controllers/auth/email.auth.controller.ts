import { AuthEmailRepository } from '@/data/protocols/database/auth.email.repository';
import { IValidation } from '@/presentation/protocols/validation';
import { IController } from '@/presentation/protocols/controller';
import { PasswordAdapter } from '@/infra/cryptography/password';
import { IHttpResponse } from '@/presentation/protocols/http';
import {
  badRequest,
  ok,
  serverError,
  unauthorized,
} from '@/presentation/helpers/http.helper';
import { IJwtHandler } from '@/presentation/protocols/jwt';

export class EmailAuthController implements IController {
  constructor(
    private readonly authEmailRepository: AuthEmailRepository,
    private readonly jwtHandler: IJwtHandler,
    private readonly emailValidator: IValidation,
    private readonly passwordAdapter: PasswordAdapter,
  ) {}

  async handle(request: EmailAuthController.Request): Promise<IHttpResponse> {
    try {
      const { email, password, stayLogged, captchaResponse } = request.body;
      const validation = this.emailValidator.validate(email.toString());
      if (validation instanceof Error) {
        return badRequest(validation);
      }

      const passwordHash = await this.passwordAdapter.encrypt(
        password.toString(),
      );
      const user = await this.authEmailRepository.getUserByEmailAndPassword({
        email,
        password: passwordHash,
      });

      if (user instanceof Error) {
        return serverError(user.message);
      }

      if (user === null) {
        return unauthorized(`invalid.auth`);
      }

      const jwt = await this.jwtHandler.generate({
        ...user,
        password: null,
      });
      return ok(JSON.stringify({ accessToken: jwt }));
    } catch (e) {
      return serverError(`email.auth.error`);
    }
  }
}

export namespace EmailAuthController {
  export type Request = {
    body: {
      email: string;
      password: string;
      stayLogged: boolean;
      captchaResponse: string;
    };
  };
}
