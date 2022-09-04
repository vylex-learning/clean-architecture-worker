import { EmailAuthController } from '@/presentation/controllers/auth/email.auth.controller';
import { AuthRepositoryMemoryDb } from '@/infra/database/memory/user/auth.email';
import { EmailValidation } from '@/validation/validators/email.validation';
import { JwtTokenHandler } from '@/infra/gateway/jwt.token.handler';
import { PasswordAdapter } from '@/infra/cryptography/password';

type SutTypes = {
  sut: EmailAuthController;
  authRepositoryMemoryDb: AuthRepositoryMemoryDb;
  emailValidation: EmailValidation;
  jwtTokenHandler: JwtTokenHandler;
  passwordAdapter: PasswordAdapter;
};

const makeSut = (): SutTypes => {
  const emailValidation = new EmailValidation();
  const jwtTokenHandler = new JwtTokenHandler();
  const passwordAdapter = new PasswordAdapter();
  const authRepositoryMemoryDb = new AuthRepositoryMemoryDb();

  const sut = new EmailAuthController(
    authRepositoryMemoryDb,
    jwtTokenHandler,
    emailValidation,
    passwordAdapter,
  );
  return {
    sut,
    authRepositoryMemoryDb,
    emailValidation,
    jwtTokenHandler,
    passwordAdapter,
  };
};

const mockRequest = (): EmailAuthController.Request => ({
  body: {
    email: 'sdfgsdf@sdfgds.com',
    password: '12324566',
    stayLogged: false,
    captchaResponse: '',
  },
});

describe('Email auth', () => {
  test('Should return 400 to bad request', async () => {
    const { sut } = makeSut();
    const request = mockRequest();
    const response = await sut.handle(request);
    console.log({ response });
  });
});
