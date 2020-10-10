import { gql } from 'graphql-request';

export const episodeCollectionQuery = (page: number): string => {
  return gql`
    query {
      episodes(page: ${page}) {
        results {
          id
          name
          episode
          characters {
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

export const filterEpisodeQuery = (search: string): string => {
  return gql`
  query {
    episodes(filter: { name: "${search}" }) {
      results {
        id
        name
        episode
        characters {
            name
          }
      }
    }
  }
  `;
};
