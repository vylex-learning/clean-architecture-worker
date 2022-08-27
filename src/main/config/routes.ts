import { contactRouter } from '@/main/routes/contact.routes';
import { errorRouter } from '@/main/routes/error.routes';
import { authRouter } from '@/main/routes/auth.routes';
import { swaggerRouter } from '@/main/config/swagger';

export const routes = [
  ...swaggerRouter.routes,
  ...contactRouter.routes,
  ...authRouter.routes,
  ...errorRouter.routes,
];
