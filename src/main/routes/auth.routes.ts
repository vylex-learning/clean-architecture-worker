import { EmailAuthController } from '@/presentation/controllers/auth/email.auth.controller';
import { RegisterController } from '@/presentation/controllers/auth/register.controller';
import { AuthRepositoryFaunaDb } from '@/infra/database/fauna/user/auth.email';
import { adaptRoute } from '@/main/adapters/itty.adapter';
import { FaunaDb } from '@/infra/database/fauna/fauna.db';
import { Router } from 'itty-router';
import { JwtTokenHandler } from '@/infra/gateway/jwt.token.handler';
import { EmailValidation } from '@/validation/validators/email.validation';
import { PasswordAdapter } from '@/infra/cryptography/password';

const authRouter = Router({
  base: '/v1/auth',
});

const faundaDb = new FaunaDb();
const jwtTokenHandler = new JwtTokenHandler();
const emailValidation = new EmailValidation();
const passwordAdapter = new PasswordAdapter();
const authRepositoryFaunaDb = new AuthRepositoryFaunaDb(faundaDb);

authRouter.post(
  '/email',
  adaptRoute(
    new EmailAuthController(
      authRepositoryFaunaDb,
      jwtTokenHandler,
      emailValidation,
      passwordAdapter,
    ),
  ),
);
authRouter.post('/email/register', adaptRoute(new RegisterController()));

export { authRouter };
