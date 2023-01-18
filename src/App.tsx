import MainStack from '@navigation/stacks/main';
import {NavigationContainer} from '@react-navigation/native';
import store, {persistor} from '@store';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

function App(): JSX.Element {
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
