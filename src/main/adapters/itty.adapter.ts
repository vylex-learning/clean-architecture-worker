import { EnvironmentSingleton } from '@/main/config/environments.singleton';
import { EnvironmentVars } from '@/infra/config/environment.var';
import { Controller } from '@/presentation/protocols/controller';
import { Request } from 'itty-router';

const envInstance = EnvironmentSingleton.getInstance();

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, env: EnvironmentVars): Promise<Response> => {
    const jsonBody = (request.json && (await request.json())) || {};
    const requestAdapted = {
      ...{ body: jsonBody },
      ...{ query: request.query || {} },
      ...{ params: request.params || {} },
    };
    envInstance.setEnv(env);
    const httpResponse = await controller.handle(requestAdapted);
    return new Response(httpResponse.body, {
      status: httpResponse.statusCode,
    });
  };
};
