import { IHttpResponse } from '@/presentation/protocols/http';

export const badRequest = (error: Error): IHttpResponse => ({
  statusCode: 400,
  body: JSON.stringify({ error: error.message }),
});

export const forbidden = (error: Error): IHttpResponse => ({
  statusCode: 403,
  body: JSON.stringify({ error: error.message }),
});

export const pageNotFound = (error?: string): IHttpResponse => ({
  statusCode: 404,
  body: JSON.stringify({ error }),
});

export const unauthorized = (error: string): IHttpResponse => ({
  statusCode: 401,
  body: JSON.stringify({ error }),
});

export const serverError = (error: string): IHttpResponse => ({
  statusCode: 500,
  body: JSON.stringify({ error }),
});

export const ok = (data: any): IHttpResponse => ({
  statusCode: 200,
  body: data,
});

export const noContent = (): IHttpResponse => ({
  statusCode: 204,
  body: null,
});
