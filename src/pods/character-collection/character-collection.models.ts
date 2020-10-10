export interface CharacterGql {
  id: string;
  name: string;
  image: string;
  species: string;
}

type Info = {
  pages: number;
};

type Characters = {
  results: CharacterGql[];
  info: Info;
};

export interface GetCharacterResponse {
  characters: Characters;
}

export interface CharacterVm {
  id: number;
  name: string;
  image: string;
  species: string;
}
