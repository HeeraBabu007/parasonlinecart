import React from 'react';
import { Provider } from 'react-redux';
//import BookContainer from './components/bookContainer';
//import HookBookContainer from './components/hookBookContainer';
import ProductContainerByHook from './components/Product';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductContainerByHook/>
      </div>
    </Provider>
  );
}

export default App;