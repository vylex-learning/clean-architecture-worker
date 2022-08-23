import { NotFoundController } from '@/presentation/controllers/error/not.found.controller';
import { adaptRoute } from '@/main/adapters/itty.adapter';
import { Router } from 'itty-router';

const errorRouter = Router();

errorRouter.all('*', adaptRoute(new NotFoundController()));

export { errorRouter };
