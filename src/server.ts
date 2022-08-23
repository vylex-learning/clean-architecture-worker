import { setupApp } from '@/main/config/app';

const app = setupApp();

export default {
  fetch: app.handle,
};
