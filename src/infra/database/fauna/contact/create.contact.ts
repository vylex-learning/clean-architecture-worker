import { CreateContactRepository } from '@/data/protocols/database/create.contact.repository';
import createContactQuery from '@/infra/database/fauna/contact/mutations/create.contact';
import { CreateContact } from '@/domain/usecases/contact/create.contact';
import { EnvironmentVars } from '@/infra/config/environment.var';
import { faundaApi } from '@/infra/database/fauna/fauna.api';

export class ContactRepository implements CreateContactRepository {
  async create(
    data: CreateContact.Params,
    env?: EnvironmentVars,
  ): Promise<boolean> {
    const createdResult = await faundaApi(createContactQuery, env, data);
    return !!createdResult;
  }
}
