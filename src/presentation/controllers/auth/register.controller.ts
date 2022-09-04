import { ok } from '@/presentation/helpers/http.helper';
import { IController } from '@/presentation/protocols/controller';
import { IHttpResponse } from '@/presentation/protocols/http';

export class RegisterController implements IController {
  async handle(): Promise<IHttpResponse> {
    return ok(`Register`);
  }
}
