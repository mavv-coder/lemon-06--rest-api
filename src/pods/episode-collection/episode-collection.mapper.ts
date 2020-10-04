import { EpisodeApi } from 'common/models';
import { EpisodeVm } from './episode-collection.vm';

const mapEpisodeFromApiToVm = (episode: EpisodeApi): EpisodeVm => ({
  id: episode.id,
  name: episode.name,
  episode: episode.episode,
  characters: episode.characters,
});

export const mapEpisodeCollectionFromApiToVm = (
  collection: EpisodeApi[]
): EpisodeVm[] => collection.map(mapEpisodeFromApiToVm);
