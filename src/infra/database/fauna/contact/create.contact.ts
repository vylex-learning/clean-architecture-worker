import { CreateContactRepository } from '@/data/protocols/database/create.contact.repository';
import createContactQuery from '@/infra/database/fauna/contact/mutations/create.contact';
import { CreateContact } from '@/domain/usecases/contact/create.contact';
import { faundaApi } from '@/infra/database/fauna/fauna.api';
import { EnvironmentSingleton } from '@/main/config/environments.singleton';

const envInstance = EnvironmentSingleton.getInstance();

export class ContactRepository implements CreateContactRepository {
  async create(data: CreateContact.Params): Promise<boolean> {
    const env = envInstance.getEnv();

    const createdResult = await faundaApi(createContactQuery, env, data);
    return !!createdResult;
  }
}
