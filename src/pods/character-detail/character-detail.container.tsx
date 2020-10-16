import React from 'react';
import { useParams } from 'react-router-dom';
import { mapCharacterFromApiToVm } from './character-detail.mapper';
import { CharacterDetailComponent } from './character-detail.component';
import {
  CharacterVm,
  createEmptyCharacter,
  Quote,
} from './character-detail.vm';
import {
  getCharacter,
  getQuote,
  getQuoteCollection,
  createQuote,
  updateQuote,
} from './api';

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
    const quoteCollection = await getQuoteCollection();
    return (
      quoteCollection.findIndex(
        (el: Quote) => el.id === parseInt(params.id)
      ) !== -1
    );
  };

  const onLoadCharacter = async (): Promise<void> => {
    const character = await getCharacter(params.id);
    const newCharacter: CharacterVm = mapCharacterFromApiToVm(character);
    setCharacter(newCharacter);
  };

  const getCharacterQuote = async (isQuote: boolean): Promise<void> => {
    if (isQuote) {
      const response = await getQuote(params.id);
      response.quote === undefined
        ? setCharacterQuote('')
        : setCharacterQuote(response.quote);
    }
  };

  const onUpdateQuote = (id: number, quote: string): void => {
    !isQuoteRef.current ? createQuote(id, quote) : updateQuote(id, quote);
    setCharacterQuote(quote);
  };

  const getAllData = async (): Promise<void> => {
    const isQuoteInApi = await checkIfQuoteExist();
    isQuoteRef.current = isQuoteInApi;
    onLoadCharacter();
    getCharacterQuote(isQuoteRef.current);
  };

  React.useEffect(() => {
    getAllData();
  }, []);

  return (
    <CharacterDetailComponent
      character={character}
      onUpdate={onUpdateQuote}
      characterQuote={characterQuote}
    />
  );
};
