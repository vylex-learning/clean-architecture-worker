import { EmailValidation } from '@/validation/validators/email.validation';
import { Controller } from '@/presentation/protocols/controller';
import { EmailAuth } from '@/domain/usecases/auth/email.auth';
import { HttpResponse } from '@/presentation/protocols/http';
import {
  badRequest,
  ok,
  serverError,
} from '@/presentation/helpers/http.helper';

export class EmailAuthController implements Controller {
  constructor(
    private readonly emailAuth: EmailAuth,
    private readonly emailValidation: EmailValidation = new EmailValidation(),
  ) {}

  async handle(request: EmailAuthController.Request): Promise<HttpResponse> {
    try {
      const { email, password, stayLogged, captchaResponse } = request.body;

      const validation = this.emailValidation.validate(email);
      if (validation) {
        return badRequest(validation);
      }

      const auth = this.emailAuth.isEmailAuthValid({ email, password });
      return ok(email);
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
