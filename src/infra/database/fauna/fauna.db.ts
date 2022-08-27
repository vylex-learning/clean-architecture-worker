import { EnvironmentSingleton } from '@/main/config/environments.singleton';
import { DocumentNode, print } from 'graphql';
import { Variables } from 'graphql-request';

const envInstance = EnvironmentSingleton.getInstance();
const env = envInstance.getEnv();

export interface FaunaApiHelper<T = any> {
  execute: (gql: DocumentNode, variables?: Variables) => Promise<T>;
}

export class FaunaDb implements FaunaApiHelper {
  async execute(
    gql: DocumentNode,
    variables?: Variables | undefined,
  ): Promise<any> {
    const options = {
      method: 'POST',
      headers: {
        authorization: `Bearer ${env?.FAUNADB_SECRET}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: print(gql),
        variables,
      }),
    };
    const response = await fetch(env?.FAUNADB_API || '', options);
    return await response.json();
  }
}
