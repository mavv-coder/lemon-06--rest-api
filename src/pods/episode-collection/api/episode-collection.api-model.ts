export interface EpisodeApi {
  id: string;
  name: string;
  episode: string;
  characters: Character[];
}

type Character = {
  name: string;
};

type Info = {
  pages: number;
};

export type EpisodeCollection = {
  results: EpisodeApi[];
  info: Info;
};

export type FilteredEpisodeCollection = {
  results: EpisodeApi[];
};

export interface GetEpisodeCollectionResponse {
  episodes: EpisodeCollection;
}

export interface FilterEpisodeCollectionResponse {
  episodes: FilteredEpisodeCollection;
}
