import React from 'react';


class Dog extends React.Component {
  constructor(){
	  super();
	  this.state = {
		  result: ''
		  }
  }
  reveal() {
	this.setState({
		result: "Today I discovered my dog "+this.refs.name.value
		+" chewing on a " +this.refs.noun.value+". "
		+"I decided to give him some "
		+this.refs.food.value+
		" to chew on so I could relax, drink some "
		+this.refs.drink.value+
		" and watch "+this.refs.show.value+"."
		})  
  }
  
  
  render(){
      return(
	    <div>
		  <input 
		  ref="noun"
		  type="text" 
		  /> Please enter a noun.
		  <hr />
		  <input 
		  ref="name"
		  type="text" 
		  /> Please enter a name.
		  <hr />
		  <input 
		  ref="food"
		  type="text" 
		  /> Please enter a food.
		  <hr />
		  <input 
		  ref="drink"
		  type="text" 
		  /> Please enter a type of drink.
		  <hr />
		  <input 
		  ref="show"
		  type="text" 
		  /> Please enter a TV show or movie
		  <hr />
		  <button onClick={this.reveal.bind(this)}>Result</button>
		  <div id="res"><h2>{this.state.result}</h2></div>
		</div>
	  )
  }
}

export default Dog;