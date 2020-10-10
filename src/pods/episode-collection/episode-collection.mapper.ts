import { EpisodeGql, EpisodeVm } from './episode-collection.models';

const mapCharacterName = (list: { name: string }[]): string[] =>
  list.map((el) => el.name);

const mapEpisodeFromApiToVm = (episode: EpisodeGql): EpisodeVm => ({
  ...episode,
  id: parseInt(episode.id),
  characters: mapCharacterName(episode.characters),
});

export const mapEpisodeCollectionFromApiToVm = (
  collection: EpisodeGql[]
): EpisodeVm[] => collection.map(mapEpisodeFromApiToVm);
