import { gql } from 'graphql-request';

export const locationCollectionQuery = (page: number): string => {
  return gql`
    query {
      locations(page: ${page}) {
        results {
          id
          name
          type
          dimension
          residents {
            name
          }
        }
  	    info {
          pages
        }
      }
    }
  `;
};

export const filterLocationQuery = (search: string): string => {
  return gql`
    query {
      locations(filter: { name: "${search}" }) {
        results {
          id
          name
          type
          dimension
          residents {
              name
          }
        }
    }
  }
  `;
};
