import Axios from 'axios';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { CharacterVm, createEmptyCharacter } from './character-detail.models';
import { mapCharacterFromApiToVm } from './character-detail.mapper';
import { CharacterDetailComponent } from './character-detail.component';

interface Params {
  id: string;
}

export const CharacterDetailContainer: React.FC = () => {
  const history = useHistory();
  const params: Params = useParams();
  const [character, setCharacter] = React.useState<CharacterVm>(
    createEmptyCharacter()
  );

  const getCharacter = async (): Promise<void> => {
    const resolve = await Axios.get(
      `${process.env.API_CHARACTERS_URL}${params.id}`
    );
    const newCharacter: CharacterVm = mapCharacterFromApiToVm(resolve.data);
    setCharacter(newCharacter);
  };

  React.useEffect(() => {
    getCharacter();
  });
  return <CharacterDetailComponent character={character} />;
};
