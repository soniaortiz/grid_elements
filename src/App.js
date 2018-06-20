import React, { Component } from 'react';
import './App.css';
import { ProductContainer } from './Product/ProductContainer';
import { Grid } from './grid/grid';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid />
      </React.Fragment>
    );
  }
}

export default App;
