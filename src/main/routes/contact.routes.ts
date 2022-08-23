import { CreateContactController } from '@/presentation/controllers/contact/create.contact.controller';
import { ContactRepository } from '@/infra/database/fauna/contact/create.contact';
import { adaptRoute } from '@/main/adapters/itty.adapter';
import { Router } from 'itty-router';

const contactRouter = Router({
  base: '/v1/contact',
});

const contactRepository = new ContactRepository();

contactRouter.post(
  '/create',
  adaptRoute(new CreateContactController(contactRepository)),
);

export { contactRouter };
