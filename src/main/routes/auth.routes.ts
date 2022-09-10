import { EmailAuthController } from '@/presentation/controllers/auth/email.auth.controller';
import { RegisterController } from '@/presentation/controllers/auth/register.controller';
import { AuthRepositoryMongoDb } from '@/infra/database/mongodb/user/auth.email';
import { EmailValidation } from '@/validation/validators/email.validation';
import { JwtTokenHandler } from '@/infra/gateway/jwt.token.handler';
import { PasswordAdapter } from '@/infra/cryptography/password';
import { adaptRoute } from '@/main/adapters/itty.adapter';
import { MongoDb } from '@/infra/database/mongodb';
import { Router } from 'itty-router';

const authRouter = Router({
  base: '/v1/auth',
});

const mongoDb = new MongoDb();
const jwtTokenHandler = new JwtTokenHandler();
const emailValidation = new EmailValidation();
const passwordAdapter = new PasswordAdapter();
const authRepositoryMongoDb = new AuthRepositoryMongoDb(mongoDb);

authRouter.post(
  '/email',
  adaptRoute(
    new EmailAuthController(
      authRepositoryMongoDb,
      jwtTokenHandler,
      emailValidation,
      passwordAdapter,
    ),
  ),
);
authRouter.post('/email/register', adaptRoute(new RegisterController()));

export { authRouter };
