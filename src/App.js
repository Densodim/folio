import React, { Component } from 'react';
import { GlobalStyled } from './components/GlobalStyled/GlobalStyled.tsx';
import HeaderContent from './components/HeaderContent/HeaderContent.tsx';


class App extends Component {
  render() {
    return (
      <>
      <GlobalStyled />
      <HeaderContent />
      
      </>
    );
  }
}

export default App;
