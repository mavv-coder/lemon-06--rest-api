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
