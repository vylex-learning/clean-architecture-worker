import { CreateContact } from '@/domain/usecases/contact/create.contact';
import { ok, serverError } from '@/presentation/helpers/http.helper';
import { IController } from '@/presentation/protocols/controller';
import { IHttpResponse } from '@/presentation/protocols/http';

export class CreateContactController implements IController {
  constructor(private readonly createContact: CreateContact) {}

  async handle(request: CreateContact.Params): Promise<IHttpResponse> {
    try {
      const createResult = await this.createContact.create(request);
      return ok(createResult);
    } catch (e) {
      return serverError('create.contact.error');
    }
  }
}
