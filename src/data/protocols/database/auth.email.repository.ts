import { EmailAuth } from '@/domain/usecases/auth/email.auth';

export interface AuthEmailRepository {
  getUserByEmailAndPassword: (
    data: EmailAuth.Params,
  ) => Promise<EmailAuth.Result>;
}
