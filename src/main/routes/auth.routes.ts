import { EmailAuthController } from '@/presentation/controllers/auth/email.auth.controller';
import { RegisterController } from '@/presentation/controllers/auth/register.controller';
import { AuthRepository } from '@/infra/database/fauna/user/auth.email';
import { adaptRoute } from '@/main/adapters/itty.adapter';
import { FaunaDb } from '@/infra/database/fauna/fauna.db';
import { Router } from 'itty-router';

const authRouter = Router({
  base: '/v1/auth',
});

const faundaDb = new FaunaDb();
const authRepository = new AuthRepository(faundaDb);

authRouter.post('/email', adaptRoute(new EmailAuthController(authRepository)));
authRouter.post('/email/register', adaptRoute(new RegisterController()));

export { authRouter };
