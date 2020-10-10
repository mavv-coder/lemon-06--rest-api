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

export const filterCharacterQuery = (name: string): string => {
  return gql`
    characters(filter: { name: "${name}" }) {
      results {
        id
        name
        image
        species
      }
    }
  `;
};
