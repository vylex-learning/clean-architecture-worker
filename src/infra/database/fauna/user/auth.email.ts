import getUserByEmailAndPasswordQuery from '@/infra/database/fauna/user/queries/get.by.email.and.password';
import { AuthEmailResponse } from '@/data/models/database/faunadb/auth.email.response';
import { AuthEmailRepository } from '@/data/protocols/database/auth.email.repository';
import { EmailAuth } from '@/domain/usecases/auth/email.auth';
import { FaunaDb } from '@/infra/database/fauna/fauna.db';
import { UserAdapter } from '@/domain/adapters/user/user.adapter';

export class AuthRepositoryFaunaDb implements AuthEmailRepository {
  constructor(private readonly faundaDb: FaunaDb) {}

  async getUserByEmailAndPassword(
    data: EmailAuth.Params,
  ): Promise<EmailAuth.Result> {
    try {
      const userResult = await this.faundaDb.execute<AuthEmailResponse>(
        getUserByEmailAndPasswordQuery,
        {
          email: data.email,
          password: data.password,
        },
      );

      const user = userResult?.data?.findUserByEmailAndPassword || null;
      if (user === null) {
        return null;
      }

      const userAdapted = UserAdapter.create({ ...user, id: user._id });
      return userAdapted;
    } catch {
      return new Error(`fetch.error`);
    }
  }
}
