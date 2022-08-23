import { CreateContactRepository } from '@/data/protocols/database/create.contact.repository';
import { CreateContact } from '@/domain/usecases/contact/create.contact';

export class DbCreateContact implements CreateContact {
  constructor(
    private readonly createContactRepository: CreateContactRepository,
  ) {}

  async create(data: CreateContact.Params): Promise<boolean> {
    const createdResult = await this.createContactRepository.create(data);
    return createdResult;
  }
}
