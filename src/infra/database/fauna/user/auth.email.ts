import getUserByEmailAndPasswordQuery from '@/infra/database/fauna/user/queries/get.by.email.and.password';
import { AuthEmailRepository } from '@/data/protocols/database/auth.email.repository';
import { FaunaDb } from '@/infra/database/fauna/fauna.db';
import { EmailAuth } from '@/domain/usecases/auth/email.auth';

export class AuthRepository implements AuthEmailRepository {
  constructor(private readonly faundaDb: FaunaDb) {}

  async isEmailAuthValid(
    data: EmailAuth.Params,
  ): Promise<AuthEmailRepository.Result> {
    const userResult = await this.faundaDb.execute(
      getUserByEmailAndPasswordQuery,
      {
        email: data.email,
        password: data.password,
      },
    );
    return userResult;
  }
}
