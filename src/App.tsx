import MainStack from '@navigation/stacks/main';
import {NavigationContainer} from '@react-navigation/native';
import store, {persistor} from '@store';
import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {PERMISSIONS, requestMultiple} from 'react-native-permissions';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

function App(): JSX.Element {
  useEffect(() => {
    requestMultiple([
      PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL,
      PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      PERMISSIONS.IOS.MICROPHONE,
      PERMISSIONS.IOS.CAMERA,
      PERMISSIONS.IOS.PHOTO_LIBRARY,
    ]).then(statuses => {
      console.log({statuses});
    });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <PersistGate
            loading={<ActivityIndicator size="large" />}
            persistor={persistor}>
            <MainStack />
          </PersistGate>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
