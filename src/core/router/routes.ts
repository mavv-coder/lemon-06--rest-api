import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  dashboard: string;
  characterDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  dashboard: '/dashboard',
  characterDetail: '/character/:id',
};

// type NavigationFunction = (id: string) => string;

// interface LinkRoutes extends Omit<SwitchRoutes, 'characterDetail'> {
//   characterDetail: NavigationFunction;
// }

// export const linkRoutes: LinkRoutes = {
//   ...switchRoutes,
//   characterDetail: (id) => generatePath(switchRoutes.characterDetail, { id }),
// };
