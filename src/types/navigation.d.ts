import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ROUTES} from '@utils/routes';

export type MainStackParamList = {
  [ROUTES.MAIN]: undefined;
  [ROUTES.PIN]: undefined;
  [ROUTES.SETTINGS]: undefined;
  [ROUTES.ADVANCE_SETTINGS]: undefined;
  [ROUTES.SUCCESS]: undefined;
};

export type Props = NativeStackScreenProps<MainStackParamList, ROUTES.MAIN>;
