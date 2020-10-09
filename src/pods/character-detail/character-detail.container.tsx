import Axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { mapCharacterFromApiToVm } from './character-detail.mapper';
import { CharacterDetailComponent } from './character-detail.component';
import {
  CharacterVm,
  createEmptyCharacter,
  Quote,
} from './character-detail.vm';

interface Params {
  id: string;
}

export const CharacterDetailContainer: React.FC = () => {
  const params: Params = useParams();
  const isQuoteRef = React.useRef<boolean>(false);
  const [characterQuote, setCharacterQuote] = React.useState<string>('');
  const [character, setCharacter] = React.useState<CharacterVm>(
    createEmptyCharacter()
  );

  const checkIfQuoteExist = async (): Promise<boolean> => {
    const { data } = await Axios.get('api/quotes');
    return data.findIndex((el: Quote) => el.id === parseInt(params.id)) !== -1;
  };

  const getCharacter = async (): Promise<void> => {
    const { data } = await Axios.get(
      `${process.env.API_CHARACTERS_URL}${params.id}`
    );
    const newCharacter: CharacterVm = mapCharacterFromApiToVm(data);
    setCharacter(newCharacter);
  };

  const getCharacterQuote = async (isQuote: boolean): Promise<void> => {
    if (isQuote) {
      const { data } = await Axios.get(
        `${process.env.API_QUOTES_URL}${params.id}`
      );
      setCharacterQuote(data.quote);
    }
  };

  const updateQuote = async (id: number, quote: string): Promise<void> => {
    !isQuoteRef.current
      ? Axios.post(process.env.API_QUOTES_URL, { id, quote: quote })
      : Axios.put(`${process.env.API_QUOTES_URL}${id}`, {
          quote: quote,
        });
    setCharacterQuote(quote);
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
      onUpdate={updateQuote}
      characterQuote={characterQuote}
    />
  );
};
