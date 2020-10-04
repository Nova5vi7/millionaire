import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PlaygroundContainer from './components/playground-container';

function App() {
  return (
    <Provider store={store}>
      <PlaygroundContainer />
    </Provider>
  );
}

export default App;
