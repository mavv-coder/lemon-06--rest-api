import Axios from 'axios';
import { CharacterCollectionResponse } from './character-collection.api-model';

export const getCharacterCollection = async (
  page: number
): Promise<CharacterCollectionResponse> => {
  const { data } = await Axios.get(
    `${process.env.API_CHARACTERS_URL}?page=${page}`
  );
  return data;
};

export const filterCharacter = async (
  search: string
): Promise<CharacterCollectionResponse> => {
  const { data } = await Axios.get(
    `${process.env.API_CHARACTERS_URL}?name=${search}`
  );
  return data;
};
