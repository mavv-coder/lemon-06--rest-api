export interface LocationApi {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

type Info = {
  count: number;
  next: string;
  pages: number;
  prev: string;
};

export interface LocationCollectionResponse {
  info: Info;
  results: LocationApi[];
}
