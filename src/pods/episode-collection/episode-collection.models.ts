export interface EpisodeGql {
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

type EpisodeCollection = {
  results: EpisodeGql[];
  info: Info;
};

type EpisodeFilter = {
  results: EpisodeGql[];
};

export interface GetEpisodeCollectionResponse {
  episodes: EpisodeCollection;
}

export interface FilterEpisodeCollectionResponse {
  episodes: EpisodeFilter;
}

export interface EpisodeVm {
  id: number;
  name: string;
  episode: string;
  characters: string[];
}
