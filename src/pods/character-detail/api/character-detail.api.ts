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

export const updateQuote = (id: number, quote: string): void => {
  Axios.put(`${process.env.API_QUOTES_URL}${id}`, {
    quote: quote,
  });
};

export const createQuote = (id: number, quote: string): void => {
  Axios.post(process.env.API_QUOTES_URL, { id, quote });
};
