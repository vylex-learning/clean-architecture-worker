import { EmailAuth } from '@/domain/usecases/auth/email.auth';

export interface AuthEmailRepository {
  getUserByEmail: (
    data: AuthEmailRepository.Params,
  ) => Promise<AuthEmailRepository.Result>;
}

export namespace AuthEmailRepository {
  export type Params = EmailAuth.Params;
  export type Result = EmailAuth.Result;
}
