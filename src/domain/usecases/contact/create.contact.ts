import { EnvironmentVars } from '@/infra/config/environment.var';

export interface CreateContact {
  create: (
    data: CreateContact.Params,
    env?: EnvironmentVars,
  ) => Promise<boolean>;
}

export namespace CreateContact {
  export type Params = {
    fullName: string;
    email: string;
    message: string;
    userId?: string;
  };

  export type Result = boolean;
}
