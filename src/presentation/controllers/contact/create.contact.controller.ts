import { CreateContact } from '@/domain/usecases/contact/create.contact';
import { ok, serverError } from '@/presentation/helpers/http.helper';
import { Controller } from '@/presentation/protocols/controller';
import { HttpResponse } from '@/presentation/protocols/http';

export class CreateContactController implements Controller {
  constructor(private readonly createContact: CreateContact) {}

  async handle(request: CreateContact.Params): Promise<HttpResponse> {
    try {
      const createResult = await this.createContact.create(request);
      return ok(createResult);
    } catch (e) {
      return serverError();
    }
  }
}
