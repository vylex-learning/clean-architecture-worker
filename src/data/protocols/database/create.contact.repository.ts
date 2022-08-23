import { CreateContact } from '@/domain/usecases/contact/create.contact';

export interface CreateContactRepository {
  create: (
    data: CreateContactRepository.Params,
  ) => Promise<CreateContactRepository.Result>;
}

export namespace CreateContactRepository {
  export type Params = CreateContact.Params;
  export type Result = boolean;
}
