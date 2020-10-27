import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { configureStore } from './store/configureStore';
import 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import RootApp from './navigators/navigator';


export default class App extends Component {
  constructor(props) {
    super(props);
    const { store, persistor } = configureStore();

    this.state = {
      store,
      persistor,
    };
  }

  render() {
    const { store, persistor } = this.state;

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <RootApp />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
