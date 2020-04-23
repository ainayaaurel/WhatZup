import React, {Component} from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import MainHome from './src/MainHome';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainHome />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
