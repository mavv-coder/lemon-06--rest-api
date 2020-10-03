export interface CharacterVm {
  id: number;
  name: string;
  image: string;
  species: string;
  origin: string;
}

export interface Quote {
  id: number;
  quote: string;
}

export const createEmptyCharacter = (): CharacterVm => ({
  id: 0,
  name: '',
  image: '',
  species: '',
  origin: '',
});
