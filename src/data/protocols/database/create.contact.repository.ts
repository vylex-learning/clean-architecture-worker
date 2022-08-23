import { CreateContact } from '@/domain/usecases/contact/create.contact';
import { EnvironmentVars } from '@/infra/config/environment.var';

export interface CreateContactRepository {
  create: (
    data: CreateContactRepository.Params,
    env?: EnvironmentVars,
  ) => Promise<CreateContactRepository.Result>;
}

export namespace CreateContactRepository {
  export type Params = CreateContact.Params;
  export type Result = boolean;
}
