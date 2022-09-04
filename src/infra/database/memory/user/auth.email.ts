import { AuthEmailRepository } from '@/data/protocols/database/auth.email.repository';
import { UserListMock } from '@/infra/database/memory/user/__mocks__/user';
import { EmailAuth } from '@/domain/usecases/auth/email.auth';

export class AuthRepositoryMemoryDb implements AuthEmailRepository {
  private userMock = UserListMock();

  async getUserByEmailAndPassword(
    data: EmailAuth.Params,
  ): Promise<EmailAuth.Result> {
    const { email, password } = data;

    const findUser = this.userMock.find(
      (user) => user.email === email && user.password === password,
    );

    return findUser || null;
  }
}
