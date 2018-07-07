import React from 'react';

class Celeb extends React.Component {
  constructor(){
	  super();
	  this.state = {
		  result: ''
		  }
  }
  reveal() {	  
	this.setState({
		result: "Did you hear that "+this.refs.male.value+
		" will be making an appearance at "
		+this.refs.restaurant.value+
		" to promote the upcoming remake of "
		+this.refs.movie.value+
		"? He will be starring in it opposite "
		+this.refs.female.value+
		"! I wonder if they will order the "
		+this.refs.food.value+"?"})  
  }
  
  
  render(){
      return(
	    <div>
		  <input 
		  ref="male"
		  type="text" 
		  /> Please enter the name of a male celebrity.
		  <hr />
		  <input 
		  ref="female"
		  type="text" 
		  /> Please enter the name of a female celebrity.
		  <hr /><input 
		  ref="food"
		  type="text" 
		  /> Please enter a type of food or meal.
		  <hr />
		  <input 
		  ref="movie"
		  type="text" 
		  /> Please enter the name of a movie.
		  <hr />
		  <input 
		  ref="restaurant"
		  type="text" 
		  /> Please enter the name of a restaurant.
		  <hr />
		  <button onClick={this.reveal.bind(this)}>Result</button>
		  <div id="res"><h2>{this.state.result}</h2></div>
		  
		  
		</div>
	  )
  }
}



export default Celeb;
