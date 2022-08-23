import { routes } from '@/main/config/routes';
import { Router } from 'itty-router';

export const setupApp = () => {
  const router = Router({
    routes,
  });
  return router;
};
