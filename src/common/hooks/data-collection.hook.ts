import React from 'react';
import Axios from 'axios';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api/graphql.client';
import { CharacterGql } from 'pods/character-detail/character-detail.models';
import { EpisodeApi, LocationApi } from 'common/models';
import { CharacterVm } from 'pods/character-collection/character-collection.models';
import { EpisodeVm } from 'pods/episode-collection/episode-collection.models';
import { LocationVm } from 'pods/location-collection/location-collection.vm';

type ApiData = CharacterGql[] | EpisodeApi[] | LocationApi[];
type VmData = CharacterVm[] | EpisodeVm[] | LocationVm[];

type Mapper = (apiData: ApiData) => VmData;

export const useDataCollection = (mapper: Mapper, url: string) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [lastPage, setLastPage] = React.useState<number>(0);
  const [dataCollection, setDataCollection] = React.useState<VmData>([]);
  const currentPageRef = React.useRef(currentPage);

  const getDataCollection = async (): Promise<void> => {
    const resolve = await Axios.get(`${url}?page=${currentPageRef.current}`);
    const newCollection = mapper(resolve.data.results);
    setLastPage(resolve.data.info.pages);
    setDataCollection(newCollection);
  };

  const searchDataCollection = async (search: string): Promise<void> => {
    try {
      const resolve = await Axios.get(`${url}?name=${search}`);
      const newCollection = mapper(resolve.data.results);
      setDataCollection(newCollection);
    } catch {
      setDataCollection([]);
    }
  };

  return {
    getDataCollection,
    searchDataCollection,
    currentPage,
    setCurrentPage,
    lastPage,
    dataCollection,
    currentPageRef,
  };
};
