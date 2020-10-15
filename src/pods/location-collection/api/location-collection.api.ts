import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api/graphql.client';
import {
  LocationCollection,
  FilteredLocationCollection,
  GetLocationCollectionResponse,
  FilterLocationCollectionResponse,
} from './location-collection.api-model';

export const getLocationCollection = async (
  page: number
): Promise<LocationCollection> => {
  const query = gql`
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

  const { locations } = await graphQLClient.request<
    GetLocationCollectionResponse
  >(query);

  return locations;
};

export const filterLocation = async (
  search: string
): Promise<FilteredLocationCollection> => {
  const query = gql`
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

  const { locations } = await graphQLClient.request<
    FilterLocationCollectionResponse
  >(query);

  return locations;
};
