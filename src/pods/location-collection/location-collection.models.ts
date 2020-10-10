export interface LocationGql {
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

type LocationCollection = {
  results: LocationGql[];
  info: Info;
};

type LocationFilter = {
  results: LocationGql[];
};

export interface GetLocationCollectionResponse {
  locations: LocationCollection;
}

export interface FilterLocationCollectionResponse {
  locations: LocationFilter;
}

export interface LocationVm {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}
