import React, {Component} from 'react';
import './App.css';
import cardsData from './data.js';
import cardsData2 from './data2.js';
import Cards from './Cards';
import Header from './Header';
import Button from './Button'

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      currentCardIndex: 0,
      cardsLength: cardsData.length,
      cardsLength2: cardsData2.length
    }

  }    

  render(){
    return (
      <div className="App">
  
      </div>
  );
}
}


