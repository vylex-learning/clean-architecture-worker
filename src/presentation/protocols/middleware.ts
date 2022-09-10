import { IHttpResponse } from '@/presentation/protocols/http';

export interface IMiddleware<T = any> {
  handle: (httpRequest: T) => Promise<IHttpResponse>;
}
