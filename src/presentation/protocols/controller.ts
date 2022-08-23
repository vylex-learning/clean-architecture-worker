import { HttpResponse } from '@/presentation/protocols/http';

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>;
}
