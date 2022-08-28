import { User } from '@/domain/models/user/user.entity';

export interface EmailAuth {
  getUserByEmail: (data: EmailAuth.Params) => Promise<EmailAuth.Result>;
}

export namespace EmailAuth {
  export type Params = {
    email: string;
  };
  export type Result = User | undefined;
}
