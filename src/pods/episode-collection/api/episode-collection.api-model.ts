export interface EpisodeApi {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

type Info = {
  count: number;
  next: string;
  pages: number;
  prev: string;
};

export interface EpisodeCollectionResponse {
  info: Info;
  results: EpisodeApi[];
}
