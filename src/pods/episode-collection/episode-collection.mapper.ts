import { EpisodeApi } from './api';
import { EpisodeVm } from './episode-collection.vm';

const mapCharacterName = (list: { name: string }[]): string[] =>
  list.map((el) => el.name);

const mapEpisodeFromApiToVm = (episode: EpisodeApi): EpisodeVm => ({
  ...episode,
  id: parseInt(episode.id),
  characters: mapCharacterName(episode.characters),
});

export const mapEpisodeCollectionFromApiToVm = (
  collection: EpisodeApi[]
): EpisodeVm[] => collection.map(mapEpisodeFromApiToVm);
