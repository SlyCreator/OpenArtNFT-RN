import {StatusBar, StyleSheet, View, Platform } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import store, { persistor } from './store'
import { heightPercentageToDP } from 'react-native-responsive-screen'
 //import useCachedResources from './hooks/useCachedResources'
 import { useAppSelector } from './store/hooks'
// import { StyleVariables } from './constants/Variables'
import 'intl'
import 'intl/locale-data/jsonp/en'
// import './module/i18n'
import mapping from './mapping.json'
import theme from './theme.json'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
// import FlashMessage from 'react-native-flash-message'



const queryClient = new QueryClient()


if (Platform.OS === 'android') {
  // See https://github.com/expo/expo/issues/6536 for this issue.
  // eslint-disable-next-line no-underscore-dangle
  if (typeof (Intl as any).__disableRegExpRestore === 'function') {
    // eslint-disable-next-line no-underscore-dangle
    ; (Intl as any).__disableRegExpRestore()
  }
}

export default function App() {
  return (
    <View style={{ height: heightPercentageToDP('100%') }}>
      <ApplicationProvider
        {...eva}
        customMapping={mapping as any}
        theme={{ ...eva.light, ...theme }}>
        <IconRegistry icons={EvaIconsPack} />
        <Provider  store={store}>
          <PersistGate loading={null} persistor={persistor} >
            <QueryClientProvider client={queryClient}>
              <SafeAreaProvider>
                <StatusBar barStyle="light-content" />
                <Navigation colorScheme="light"/>
              </SafeAreaProvider>
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </ApplicationProvider>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
