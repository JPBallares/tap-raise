import {MainStackParamList} from '@interfaces/navigation';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '@screens/main';
import Pin from '@screens/pin';
import {ROUTES} from '@utils/routes';
import React from 'react';

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.MAIN} component={Main} />
      <Stack.Screen name={ROUTES.PIN} component={Pin} />
    </Stack.Navigator>
  );
};

export default MainStack;
