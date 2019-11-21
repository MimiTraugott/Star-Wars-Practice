import React, {Component} from 'react'; //importing react from react components so that it can be read in the browser
import './App.css'; //importing app.css for styling 
import cardsData from './data.js'; //importing first data file
import cardsData2 from './data2.js'; //importing second data file
import Card from './components/Card'; // importing card from components file
import Header from './components/Header';  // importing header from the header component
import Button from './components/Button' // importing Button from the button component
import CardContainer from './components/CardContainer' //imporging CardContainer from the CardContainer Component

export default class App extends Component { //exporting class component set too App
  constructor(){ //constructor to take props if needed and initialize any needs in the app class
    super();

    this.state = { // state, not needed to be utilized in this app
    }
  }    
  render(){ //render function
    return ( //returning the divs for header and cardcontainer
      <div className="App"> 
        <Header/> 
        <CardContainer characters={cardsData}/>
        <CardContainer characters={cardsData2}/>
      </div>
  );
}
}

//above on line #19, div with the classname of App. 
// bringing in the Header component, it doesn't need anything as it just has a title, but we need to bring it in here so that it will display
//and assigning a prop by the name of characters and assigning it to the cardsData file
//bringin in the cardContainer component again, and assigning a second cardcontainer component to the cardsdata2 file

//^^ two cards data componenets will display different data, but we can use the same component and just bring in different inforation


