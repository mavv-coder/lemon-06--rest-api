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

  const checkIfQuoteExist = async (): Promise<boolean> => {
    const resolve: Quote[] = await Axios.get(process.env.API_CHARACTERS_URL);
    return (
      resolve.findIndex(() => {
        resolve.filter((el) => el.id === parseInt(params.id));
      }) !== -1
    );
  };

  const getCharacter = async (): Promise<void> => {
    const resolve = await Axios.get(
      `${process.env.API_CHARACTERS_URL}${params.id}`
    );
    const newCharacter: CharacterVm = mapCharacterFromApiToVm(resolve.data);
    setCharacter(newCharacter);
  };

  const getCharacterQuote = async (): Promise<void> => {
    try {
      const resolve = await Axios.get(
        `${process.env.API_QUOTES_URL}${params.id}`
      );
      setCharacterQuote(resolve.data.quote);
    } catch {
      setCharacterQuote('');
    }
  };

  const handleUpdateQuote = async (id: number): Promise<boolean> => {
    if (!characterQuote) {
      Axios.post(process.env.API_QUOTES_URL, { id, quote: characterQuote });
    } else {
      Axios.put(`${process.env.API_QUOTES_URL}${id}`, {
        quote: characterQuote,
      });
    }

    return true;
  };

  React.useEffect(() => {
    getCharacter();
    getCharacterQuote();
    checkIfQuoteExist();
  }, []);

  return (
    <CharacterDetailComponent
      character={character}
      onUpdate={handleUpdateQuote}
      setCharacterQuote={setCharacterQuote}
      characterQuote={characterQuote}
    />
  );
};
