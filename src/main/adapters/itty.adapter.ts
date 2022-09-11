import { EnvironmentSingleton } from '@/main/config/environments.singleton';
import { EnvironmentVars } from '@/infra/config/environment.var';
import { IController } from '@/presentation/protocols/controller';
import { Request } from 'itty-router';

const corsHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Headers': 'referer, origin, content-type',
  'Access-Control-Allow-Methods': 'GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Max-Age': '86400',
};

export const adaptRoute = (controller: IController) => {
  return async (request: Request, env: EnvironmentVars): Promise<Response> => {
    const jsonBody = (request.json && (await request.json())) || {};
    const requestAdapted = {
      ...{ body: jsonBody },
      ...{ query: request.query || {} },
      ...{ params: request.params || {} },
    };

    const envInstance = EnvironmentSingleton.getInstance();
    envInstance.setEnv(env);

    const httpResponse = await controller.handle(requestAdapted);
    return new Response(httpResponse.body, {
      status: httpResponse.statusCode,
      headers: corsHeaders,
    });
  };
};
