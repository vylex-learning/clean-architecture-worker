import { ok, serverError } from '@/presentation/helpers/http.helper';
import { Controller } from '@/presentation/protocols/controiller';
import { HttpResponse } from '@/presentation/protocols/http';

export class RegisterController implements Controller {
  async handle(): Promise<HttpResponse> {
    try {
      return ok(`Register`);
    } catch {
      return serverError();
    }
  }
}
