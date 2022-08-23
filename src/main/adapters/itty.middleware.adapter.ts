import { Controller } from '@/presentation/protocols/controiller';
import { Request } from 'itty-router';

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const requestAdapted = {
      ...{ body: request.json || {} },
      ...(request.query || {}),
      ...(request.params || {}),
    };
    const httpResponse = await controller.handle(requestAdapted);
    return new Response(response.body, {
      status: httpResponse.statusCode,
    });
  };
};
