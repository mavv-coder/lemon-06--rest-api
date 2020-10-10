import { gql } from 'graphql-request';

export const characterCollectionQuery = (page: number): string => {
  return gql`
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
};

export const filterCharacterQuery = (search: string): string => {
  return gql`
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
};
