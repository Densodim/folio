import React, { Component } from 'react';
import { GlobalStyled } from './components/GlobalStyled/GlobalStyled.tsx';


class App extends Component {
  render() {
    return (
      <>
      <GlobalStyled />
      <div>Hello World</div>
      </>
    );
  }
}

export default App;
