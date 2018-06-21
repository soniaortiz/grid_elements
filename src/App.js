import React, { Component } from 'react';
import './App.css';
import { ProductContainer } from './Product/ProductContainer';
import  Grid  from './grid/grid';
import { createStore } from 'redux';
import { Reducer } from './store/app_reducers';
import { Provider } from 'react-redux';
const store = createStore(Reducer);
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <div >
            <Grid />
          </div>
        </React.Fragment>
      </Provider>

    );
  }
}
export default App;
