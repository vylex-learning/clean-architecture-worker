import getUserByEmailAndPasswordQuery from '@/infra/database/mongodb/user/queries/get.by.email.and.password';
import { AuthEmailResponse } from '@/data/models/database/mongodb/auth.email.response';
import { AuthEmailRepository } from '@/data/protocols/database/auth.email.repository';
import { UserAdapter } from '@/domain/adapters/user/user.adapter';
import { EmailAuth } from '@/domain/usecases/auth/email.auth';
import { MongoDb } from '../../mongodb';

export class AuthRepositoryMongoDb implements AuthEmailRepository {
  constructor(private readonly apiDb: MongoDb) {}

  async getUserByEmailAndPassword(
    data: EmailAuth.Params,
  ): Promise<EmailAuth.Result> {
    try {
      const { email, password } = data;

      const userResult = await this.apiDb.execute<AuthEmailResponse>(
        getUserByEmailAndPasswordQuery,
        {
          email,
          password,
        },
      );

      const user = userResult?.data?.user || null;
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
