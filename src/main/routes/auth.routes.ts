import { EmailAuthController } from '@/presentation/controllers/auth/email.auth.controller';
import { RegisterController } from '@/presentation/controllers/auth/register.controller';
import { adaptRoute } from '@/main/adapters/itty.adapter';
import { Router } from 'itty-router';

const authRouter = Router({
  base: '/v1/auth',
});

authRouter.post('/email', adaptRoute(new EmailAuthController()));
authRouter.post('/email/register', adaptRoute(new RegisterController()));

export { authRouter };
