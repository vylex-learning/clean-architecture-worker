import { ok, serverError } from '@/presentation/helpers/http.helper';
import { Controller } from '@/presentation/protocols/controiller';
import { HttpResponse } from '@/presentation/protocols/http';

export class EmailAuthController implements Controller {
  async handle(): Promise<HttpResponse> {
    try {
      return ok(`Login`);
    } catch {
      return serverError();
    }
  }
}
