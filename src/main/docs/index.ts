import { accountSchema } from '@/main/docs/schemas/account.schema';
import { badRequest } from '@/main/docs/components/bad.request';
import { loginPath } from '@/main/docs/paths/login.path';

export default {
  openapi: '3.0.0',
  info: {
    title: 'IMPS API',
    description:
      'Typescript, TDD, Clean Architecture, SOLID and Design Patterns.',
    version: '1.0.0',
    contact: {
      name: 'Henrique Bissoli Silva',
      email: 'emp.shad@gmail.com',
      url: 'https://www.linkedin.com/in/henriquebissoli',
    },
    license: {
      name: 'GPL-3.0-or-later',
      url: 'https://spdx.org/licenses/GPL-3.0-or-later.html',
    },
  },
  externalDocs: {
    description: 'IMPS URL',
    url: 'https://www.imps.com.br',
  },
  servers: [
    {
      url: '/',
      description: 'Principal Server',
    },
  ],
  tags: [
    {
      name: 'Login',
      description: 'Auth APIs',
    },
  ],
  paths: {
    loginPath,
  },
  schemas: {
    accountSchema,
  },
  components: {
    badRequest,
  },
};
