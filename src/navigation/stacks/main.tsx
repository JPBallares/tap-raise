import {MainStackParamList} from '@interfaces/navigation';
import {createStackNavigator} from '@react-navigation/stack';
import AdvancedSettings from '@screens/advancedSettings';
import Main from '@screens/main';
import Pin from '@screens/pin';
import Settings from '@screens/settings';
import Success from '@screens/success';
import {ROUTES} from '@utils/routes';
import React from 'react';

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.MAIN} component={Main} />
      <Stack.Screen name={ROUTES.SUCCESS} component={Success} />
      <Stack.Screen name={ROUTES.PIN} component={Pin} />
      <Stack.Screen name={ROUTES.SETTINGS} component={Settings} />
      <Stack.Screen
        name={ROUTES.ADVANCE_SETTINGS}
        component={AdvancedSettings}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
