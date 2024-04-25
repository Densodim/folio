import React, { Component } from 'react';
import { GlobalStyled } from './components/GlobalStyled/GlobalStyled.tsx';
import Header from './components/Header/header.tsx';


class App extends Component {
  render() {
    return (
      <>
      <GlobalStyled />
      <Header />
      </>
    );
  }
}

export default App;
