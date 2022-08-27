import { User } from '@/domain/models/user/user.entity';
import { EmailAuth } from '@/domain/usecases/auth/email.auth';

export interface AuthEmailRepository {
  isEmailAuthValid: (
    data: AuthEmailRepository.Params,
  ) => Promise<AuthEmailRepository.Result>;
}

export namespace AuthEmailRepository {
  export type Params = EmailAuth.Params;
  export type Result = User | undefined;
}
