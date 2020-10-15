import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api/graphql.client';
import {
  CharacterApi,
  GetCharacterResponse,
} from './character-detail.api-model';

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  const query = gql`
    query {
    character(id: "${id}"){
        id
        name
        image
        species
        origin {
        name
        }
        location{
        name
        }
        gender
        status
    }	
  }`;

  const { character } = await graphQLClient.request<GetCharacterResponse>(
    query
  );

  return character;
};
