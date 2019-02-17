import React, { Component } from 'react';
import './styles/main.scss';

import Image from './components/Image';
import Slideshow from './components/Slideshow';
import Description from './components/Description';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Image/>
        <Slideshow/>
        <Description/>
      </div>
    );
  }
}

export default App;
