import {ROUTES} from '@utils/routes';

export type MainStackParamList = {
  [ROUTES.MAIN]: undefined;
  [ROUTES.PIN]: {storedPin: string; nextScreen: ROUTES};
  [ROUTES.SETTINGS]: undefined;
  [ROUTES.ADVANCE_SETTINGS]: undefined;
  [ROUTES.SUCCESS]: undefined;
};
