import React from 'react';
import Main from './src/components/Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers';

const store = createStore(rootReducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
