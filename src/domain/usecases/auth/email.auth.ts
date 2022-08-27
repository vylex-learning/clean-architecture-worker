import { User } from '@/domain/models/user/user.entity';

export interface EmailAuth {
  isEmailAuthValid: (data: EmailAuth.Params) => Promise<User | undefined>;
}

export namespace EmailAuth {
  export type Params = {
    email: string;
    password: string;
  };
}
