import React from 'react';


class Fight extends React.Component {
  constructor(){
	  super();
	  this.state = {
		  result: ''
		  }
  }
  reveal() {
	this.setState({
		result: this.refs.league.value+
		" President "
		+this.refs.pres.value+
		" announced today that both "
		+this.refs.celeb.value+
		" and "
		+this.refs.otherceleb.value+
		" will soon be making their "
		+this.refs.league.value+
		" debut and will be facing each other! "
		+this.refs.celeb.value+
		" has been training extensively in "
		+this.refs.disc.value+
		" while "+this.refs.otherceleb.value+
		" has been concentrating on conditioning through "
		+this.refs.exercise.value+"."
		})  
  }
  
  
  render(){
      return(
	    <div>
		  <input 
		  ref="league"
		  type="text" 
		  /> Please enter the name of an MMA or fighting promotion.
		  <hr />
		  <input 
		  ref="pres"
		  type="text" 
		  /> Please enter a full name.
		  <hr />
		  <input 
		  ref="celeb"
		  type="text" 
		  /> Please enter the name of a celebrity.
		  <hr />
		  <input 
		  ref="otherceleb"
		  type="text" 
		  /> Please enter the name of another celebrity.
		  <hr />
		  <input 
		  ref="disc"
		  type="text" 
		  /> Please enter a type of martial art, wrestling or fighting style.
		  <hr />
		  <input 
		  ref="exercise"
		  type="text" 
		  /> Please enter a type of exercise.
		  <hr />
		  <button onClick={this.reveal.bind(this)}>Result</button>
		  <div id="res"><h2>{this.state.result}</h2></div>
		</div>
	  )
  }
}

export default Fight;