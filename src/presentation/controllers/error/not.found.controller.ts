import { pageNotFound, serverError } from '@/presentation/helpers/http.helper';
import { Controller } from '@/presentation/protocols/controiller';
import { HttpResponse } from '@/presentation/protocols/http';

export class NotFoundController implements Controller {
  async handle(): Promise<HttpResponse> {
    try {
      return pageNotFound();
    } catch {
      return serverError();
    }
  }
}
