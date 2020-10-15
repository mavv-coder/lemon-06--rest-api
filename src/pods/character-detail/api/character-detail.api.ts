import Axios from 'axios';
import { Quote } from '../character-detail.vm';
import { CharacterApi } from './character-detail.api-model';

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  const { data } = await Axios.get(`${process.env.API_CHARACTERS_URL}${id}`);
  return data;
};
export const getQuoteCollection = async (): Promise<Quote[]> => {
  const { data } = await Axios.get(process.env.API_QUOTES_URL);
  return data;
};

export const getQuote = async (id: string): Promise<Quote> => {
  const { data } = await Axios.get(`${process.env.API_QUOTES_URL}${id}`);
  return data;
};

export const updateQuote = async (
  id: number,
  quote: string
): Promise<boolean> => {
  await Axios.put(`${process.env.API_QUOTES_URL}${id}`, {
    quote: quote,
  });
  return true;
};

export const createQuote = async (
  id: number,
  quote: string
): Promise<boolean> => {
  await Axios.post(process.env.API_QUOTES_URL, { id, quote });
  return true;
};
