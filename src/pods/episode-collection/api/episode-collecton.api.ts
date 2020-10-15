import Axios from 'axios';
import { EpisodeCollectionResponse } from './episode-collection.api-model';

export const getEpisodeCollection = async (
  page: number
): Promise<EpisodeCollectionResponse> => {
  const { data } = await Axios.get(
    `${process.env.API_EPISODES_URL}?page=${page}`
  );
  return data;
};

export const filterEpisode = async (
  search: string
): Promise<EpisodeCollectionResponse> => {
  const { data } = await Axios.get(
    `${process.env.API_EPISODES_URL}?name=${search}`
  );
  return data;
};
