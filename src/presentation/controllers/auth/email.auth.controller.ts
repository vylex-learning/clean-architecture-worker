import { ok, serverError } from '@/presentation/helpers/http.helper';
import { Controller } from '@/presentation/protocols/controller';
import { EmailAuth } from '@/domain/usecases/auth/email.auth';
import { HttpResponse } from '@/presentation/protocols/http';

export class EmailAuthController implements Controller {
  async handle(request: EmailAuth.Params): Promise<HttpResponse> {
    try {
      const { email, password, stayLogged, captchaResponse } = request.body;
      return ok(email);
    } catch {
      return serverError();
    }
  }
}
