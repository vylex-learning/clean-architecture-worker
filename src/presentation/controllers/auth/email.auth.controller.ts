import { EmailValidation } from '@/validation/validators/email.validation';
import { Controller } from '@/presentation/protocols/controller';
import { EmailAuth } from '@/domain/usecases/auth/email.auth';
import { HttpResponse } from '@/presentation/protocols/http';
import { JwtTokenHandler } from '@/infra/gateway/jwt.token.handler';
import {
  badRequest,
  ok,
  serverError,
  unauthorized,
} from '@/presentation/helpers/http.helper';

export class EmailAuthController implements Controller {
  constructor(
    private readonly emailAuth: EmailAuth,
    private readonly jwtTokenHandler: JwtTokenHandler = new JwtTokenHandler(),
    private readonly emailValidation: EmailValidation = new EmailValidation(),
  ) {}

  async handle(request: EmailAuthController.Request): Promise<HttpResponse> {
    try {
      const { email, password, stayLogged, captchaResponse } = request.body;

      const validation = this.emailValidation.validate(email);
      if (validation) {
        return badRequest(validation);
      }

      const user = await this.emailAuth.getUserByEmail({ email });
      if (user === undefined) {
        return unauthorized();
      }

      if (user && user.password === password) {
        const { email, firstName, lastName, userRoles, userName } = user;
        const jwt = await this.jwtTokenHandler.generate({
          email,
          firstName,
          lastName,
          userRoles,
          userName,
        });
        return ok(JSON.stringify({ accessToken: jwt }));
      }

      return unauthorized();
    } catch {
      return serverError();
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
