import { GraphQLClient } from 'graphql-request';

export const graphQLClient = new GraphQLClient(process.env.API_GRAPHQL);
