import React, {Component} from 'react'; //importing react from react, so that we can read it in jsx and display it
import Button from './Button' //importing button, so taht we can use it below
import Card from './Card' //importing card from the cards component

class CardContainer extends Component { // class based component, that will extend component
    constructor(props){ //constructor, that will take in props
        super(props) //super that will also take in props

        this.state = { //state set to the currentIndex.  this will be used below in the charact array (which is passed in as a prop, and set to the data info in app.js)
            currentIndex: 0 //current index set to zero, that we will update later to display the next xare
        }
        this._handleCardChange = this._handleCardChange.bind(this) //this binds the _handleChange function to this instance
    }
    _handleCardChange(){  //handleChange function that handles the changing of state and the updating of the currentIndez
        this.setState({currentIndex: this.state.currentIndex+1}) //this.setState set to reassign the value of currentIndex to the index plus1
    }
    render (){ //render function
        return ( //returning a div
            <div>
                <Card character={this.props.characters[this.state.currentIndex]}/>  
                <Button handleCardChange={this._handleCardChange}/>
            </div>
        )
    }
}
export default CardContainer;

// LINE 20, calls the Card component, and sets a new prop named character and sets it equal to this.props.chacters at this.state.currentIndex (that will be taken in the card component)
// LINE 21, calls the button component, and sets a new prop named handleCardChange and sets it equal to the this._handleChange function(that changes state and updates the index)  it will be sent down  via props to the button component
