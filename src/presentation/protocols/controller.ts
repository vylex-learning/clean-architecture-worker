import { EnvironmentVars } from '@/infra/config/environment.var';
import { HttpResponse } from '@/presentation/protocols/http';

export interface Controller<T = any> {
  handle: (request: T, env?: EnvironmentVars) => Promise<HttpResponse>;
}
