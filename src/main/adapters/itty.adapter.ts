import { EnvironmentVars } from '@/infra/config/environment.var';
import { Controller } from '@/presentation/protocols/controller';
import { Request } from 'itty-router';

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, env: EnvironmentVars): Promise<Response> => {
    const requestAdapted = {
      ...{ body: request.json || {} },
      ...{ query: request.query || {} },
      ...{ params: request.params || {} },
    };
    const httpResponse = await controller.handle(requestAdapted, env);
    return new Response(httpResponse.body, {
      status: httpResponse.statusCode,
    });
  };
};
