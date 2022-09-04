import { IHttpResponse } from '@/presentation/protocols/http';

export interface IController<T = any> {
  handle: (request: T) => Promise<IHttpResponse>;
}
