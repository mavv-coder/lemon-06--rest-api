export interface CharacterApi {
  id: string;
  name: string;
  image: string;
  species: string;
}

type Info = {
  pages: number;
};

export type CharacterCollection = {
  results: CharacterApi[];
  info: Info;
};

export type FilteredCharacterCollection = {
  results: CharacterApi[];
};

export interface GetCharacterCollectionResponse {
  characters: CharacterCollection;
}

export interface FilterCharacterCollectionResponse {
  characters: FilteredCharacterCollection;
}
