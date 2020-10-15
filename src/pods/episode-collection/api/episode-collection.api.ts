import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api/graphql.client';
import {
  EpisodeCollection,
  FilteredEpisodeCollection,
  GetEpisodeCollectionResponse,
  FilterEpisodeCollectionResponse,
} from './episode-collection.api-model';

export const getEpisodeCollection = async (
  page: number
): Promise<EpisodeCollection> => {
  const query = gql`
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

  const { episodes } = await graphQLClient.request<
    GetEpisodeCollectionResponse
  >(query);

  return episodes;
};

export const filterEpisode = async (
  search: string
): Promise<FilteredEpisodeCollection> => {
  const query = gql`
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

  const { episodes } = await graphQLClient.request<
    FilterEpisodeCollectionResponse
  >(query);

  return episodes;
};
