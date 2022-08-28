import getUserByEmailAndPasswordQuery from '@/infra/database/fauna/user/queries/get.by.email.and.password';
import { AuthEmailRepository } from '@/data/protocols/database/auth.email.repository';
import { EmailAuth } from '@/domain/usecases/auth/email.auth';
import { FaunaDb } from '@/infra/database/fauna/fauna.db';

export class AuthRepository implements AuthEmailRepository {
  constructor(private readonly faundaDb: FaunaDb) {}

  async getUserByEmail(
    data: EmailAuth.Params,
  ): Promise<AuthEmailRepository.Result> {
    try {
      const userResult = await this.faundaDb.execute(
        getUserByEmailAndPasswordQuery,
        {
          email: data.email,
        },
      );
      return userResult?.data?.findUserByEmail;
    } catch (e) {
      console.log('e', e);
    }

    return undefined;
  }
}
