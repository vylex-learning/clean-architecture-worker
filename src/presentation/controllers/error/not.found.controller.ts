import { pageNotFound } from '@/presentation/helpers/http.helper';
import { IController } from '@/presentation/protocols/controller';
import { HttpResponse } from '@/presentation/protocols/http';

export class NotFoundController implements IController {
  async handle(): Promise<HttpResponse> {
    return pageNotFound();
  }
}
