import { CreateContactRepository } from '@/data/protocols/database/create.contact.repository';
import createContactQuery from '@/infra/database/fauna/contact/mutations/create.contact';
import { CreateContact } from '@/domain/usecases/contact/create.contact';
import { FaunaDb } from '@/infra/database/fauna/fauna.db';

export class ContactRepository implements CreateContactRepository {
  constructor(private readonly faunaDb: FaunaDb) {}

  async create(data: CreateContact.Params): Promise<boolean> {
    const createdResult = await this.faunaDb.execute(createContactQuery, data);
    return !!createdResult;
  }
}
