import { EnvironmentSingleton } from '@/main/config/environments.singleton';
import { DocumentNode, print } from 'graphql';
import { Variables } from 'graphql-request';

export interface MongoApiHelper<T = any> {
  execute: (gql: DocumentNode, variables?: Variables) => Promise<T>;
}

export class MongoDb implements MongoApiHelper {
  async execute<T>(
    gql: DocumentNode,
    variables?: Variables | undefined,
  ): Promise<T> {
    const envInstance = EnvironmentSingleton.getInstance();
    const env = envInstance.getEnv();

    const options = {
      method: 'POST',
      headers: {
        apiKey: env?.MONGODB_GRAPHQL_KEY || '',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: print(gql),
        variables,
      }),
    };
    const response = await fetch(env?.MONGODB_GRAPHQL_URL || '', options);
    return await response.json();
  }
}
