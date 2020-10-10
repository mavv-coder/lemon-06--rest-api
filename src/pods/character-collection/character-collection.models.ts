export interface CharacterGql {
  id: string;
  name: string;
  image: string;
  species: string;
}

type Info = {
  pages: number;
};

type CharacterCollection = {
  results: CharacterGql[];
  info: Info;
};

type CharacterFilter = {
  results: CharacterGql[];
};

export interface GetCharacterCollectionResponse {
  characters: CharacterCollection;
}

export interface FilterCharacterCollection {
  characters: CharacterFilter;
}

export interface CharacterVm {
  id: number;
  name: string;
  image: string;
  species: string;
}
