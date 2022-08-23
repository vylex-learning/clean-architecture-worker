import { EnvironmentVars } from '@/infra/config/environment.var';
import { DocumentNode, print } from 'graphql';
import { Variables } from 'graphql-request';

export const faundaApi = async (
  gql: DocumentNode,
  env?: EnvironmentVars,
  variables?: Variables,
): Promise<string> => {
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
  return await response.text();
};
