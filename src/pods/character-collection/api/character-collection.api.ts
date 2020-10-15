import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api/graphql.client';
import {
  CharacterCollection,
  FilteredCharacterCollection,
  GetCharacterCollectionResponse,
  FilterCharacterCollectionResponse,
} from './character-collection.api-model';

export const getCharacterCollection = async (
  page: number
): Promise<CharacterCollection> => {
  const query = gql`
    query {
      characters(page: ${page}) {
        results {
          id
          name
          image
          species
        }
        info {
          pages
        }
      }
    }
  `;

  const { characters } = await graphQLClient.request<
    GetCharacterCollectionResponse
  >(query);

  return characters;
};

export const filterCharacter = async (
  search: string
): Promise<FilteredCharacterCollection> => {
  const query = gql`
  query {
    characters(filter: { name: "${search}" }) {
      results {
        id
        name
        image
        species
      }
    }
  }
  `;

  const { characters } = await graphQLClient.request<
    FilterCharacterCollectionResponse
  >(query);

  return characters;
};
