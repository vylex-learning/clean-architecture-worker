import { User } from '@/domain/models/user/user.entity';

export interface IEmailAuth {
  getUserByEmailAndPassword: (
    data: EmailAuth.Params,
  ) => Promise<EmailAuth.Result>;
}

export namespace EmailAuth {
  export type Params = {
    email: string;
    password: string;
  };
  export type Result = User | Error | null;
}
