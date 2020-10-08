export interface CharacterVm {
  id: number;
  name: string;
  image: string;
  species: string;
  origin: string;
  lastLocation: string;
  gender: string;
  status: string;
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
  lastLocation: '',
  gender: '',
  status: '',
});
