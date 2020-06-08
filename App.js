import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import List from './screens/List';
import rootReducer from './store/rootReducer'
const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <List/>
    </Provider>
  );
}
