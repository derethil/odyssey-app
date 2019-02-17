import React, { Component } from 'react';
import './styles/main.scss';

import Image from './components/Image';
import Slideshow from './components/Slideshow';
import Description from './components/Description';

import Data from './data.json';

class App extends Component {
  state = {}

  componentWillMount() {
    var data = Data;
    this.state = data[0]
  }

  

  onItemClick(e) {
    var data = Data;
    e.preventDefault()
    var direction = (e.target.className === "fas fa-angle-right") ? 1 : -1

    var newSlide = this.state.index + direction;

    if (newSlide === 0) newSlide = 88;
    if (newSlide === 89) newSlide = 1;

    this.setState({ 
      index: newSlide, 
      location: data[newSlide-1].location,
      link: data[newSlide-1].link,
      description: data[newSlide-1].description
    });
  }


  render() {
    return (
      <div className="container">
        <Image />
        <Slideshow onClick={e => this.onItemClick(e)} slide={this.state.index} />
        <Description location={this.state.location} link={this.state.link} description={this.state.description}/>
      </div>
    );
  }
}

export default App;
