export interface CharacterGql {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
}

export interface GetCharacterResponse {
  character: CharacterGql;
}

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
