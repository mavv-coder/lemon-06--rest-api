import Axios from 'axios';
import { LocationCollectionResponse } from './location-collection.api-model';

export const getLocationCollection = async (
  page: number
): Promise<LocationCollectionResponse> => {
  const { data } = await Axios.get(
    `${process.env.API_LOCATIONS_URL}?page=${page}`
  );

  return data;
};

export const filterLocation = async (
  search: string
): Promise<LocationCollectionResponse> => {
  const { data } = await Axios.get(
    `${process.env.API_LOCATIONS_URL}?name=${search}`
  );
  return data;
};
