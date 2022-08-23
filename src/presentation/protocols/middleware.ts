import { HttpResponse } from '@/presentation/protocols/http';

export interface Middleware<T = any> {
  handle: (httpRequest: T) => Promise<HttpResponse>;
}
