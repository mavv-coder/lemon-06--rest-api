export interface LocationApi {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: Character[];
}

type Character = {
  name: string;
};

type Info = {
  pages: number;
};

export type LocationCollection = {
  results: LocationApi[];
  info: Info;
};

export type FilteredLocationCollection = {
  results: LocationApi[];
};

export interface GetLocationCollectionResponse {
  locations: LocationCollection;
}

export interface FilterLocationCollectionResponse {
  locations: FilteredLocationCollection;
}
