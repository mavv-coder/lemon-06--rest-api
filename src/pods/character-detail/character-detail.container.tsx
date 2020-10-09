import Axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import {
  CharacterVm,
  createEmptyCharacter,
  Quote,
} from './character-detail.vm';
import { mapCharacterFromApiToVm } from './character-detail.mapper';
import { CharacterDetailComponent } from './character-detail.component';

interface Params {
  id: string;
}

export const CharacterDetailContainer: React.FC = () => {
  const params: Params = useParams();
  const [character, setCharacter] = React.useState<CharacterVm>(
    createEmptyCharacter()
  );
  const [characterQuote, setCharacterQuote] = React.useState<string>('');
  const isQuoteRef = React.useRef<boolean>(false);

  const checkIfQuoteExist = async (): Promise<boolean> => {
    const resolve = await Axios.get('api/quotes');
    return (
      resolve.data.findIndex((el: Quote) => el.id === parseInt(params.id)) !==
      -1
    );
  };

  const getCharacter = async (): Promise<void> => {
    const resolve = await Axios.get(
      `${process.env.API_CHARACTERS_URL}${params.id}`
    );
    const newCharacter: CharacterVm = mapCharacterFromApiToVm(resolve.data);
    setCharacter(newCharacter);
  };

  const getCharacterQuote = async (isQuote: boolean): Promise<void> => {
    if (isQuote) {
      const resolve = await Axios.get(
        `${process.env.API_QUOTES_URL}${params.id}`
      );
      setCharacterQuote(resolve.data.quote);
    }
  };

  const handleUpdateQuote = async (
    id: number,
    quote: string
  ): Promise<boolean> => {
    if (!isQuoteRef.current) {
      Axios.post(process.env.API_QUOTES_URL, { id, quote: quote });
    } else {
      Axios.put(`${process.env.API_QUOTES_URL}${id}`, {
        quote: quote,
      });
    }
    setCharacterQuote(quote);
    return true;
  };

  const getAllData = async (): Promise<void> => {
    const isQuoteInApi = await checkIfQuoteExist();
    isQuoteRef.current = isQuoteInApi;
    getCharacter();
    getCharacterQuote(isQuoteRef.current);
  };

  React.useEffect(() => {
    getAllData();
  }, []);

  return (
    <CharacterDetailComponent
      character={character}
      onUpdate={handleUpdateQuote}
      characterQuote={characterQuote}
    />
  );
};
