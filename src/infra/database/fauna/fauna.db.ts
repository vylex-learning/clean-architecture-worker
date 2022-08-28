import { EnvironmentSingleton } from '@/main/config/environments.singleton';
import { DocumentNode, print } from 'graphql';
import { Variables } from 'graphql-request';

export interface FaunaApiHelper<T = any> {
  execute: (gql: DocumentNode, variables?: Variables) => Promise<T>;
}

export class FaunaDb implements FaunaApiHelper {
  async execute(
    gql: DocumentNode,
    variables?: Variables | undefined,
  ): Promise<any> {
    const envInstance = EnvironmentSingleton.getInstance();
    const env = envInstance.getEnv();

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
    const response = await fetch(
      env?.FAUNADB_API || 'https://graphql.us.fauna.com/graphql',
      options,
    );
    return await response.json();
  }
}
