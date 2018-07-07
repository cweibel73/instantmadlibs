import React from 'react';


class Politics extends React.Component {
  constructor(){
	  super();
	  this.state = {
		  result: ''
		  }
  }
  reveal() {
	this.setState({
		result: "It was announced this morning on "+this.refs.station.value+
		" that "+this.refs.celebrity.value+
		" is planning to run for President in 2020! "+
		this.refs.othercel.value+
		", who plans to run for Governor of "+
		this.refs.state.value+
		", also made an appearance on "+
		this.refs.station.value+
		" to answer accusations of "+
		this.refs.crime.value+
		" and to accept the endorsement of "+
		this.refs.thirdcel.value+
		"."
		
		})  
  }
  
  
  render(){
      return(
	    <div>
		  <input 
		  ref="station"
		  type="text" 
		  /> Please enter a TV station.
		  <hr />
		  <input 
		  ref="celebrity"
		  type="text" 
		  /> Please enter the name of a celebrity or politician.
		  <hr /><input 
		  ref="othercel"
		  type="text" 
		  /> Please enter the name another celebrity or politician.
		  <hr />
		  <input 
		  ref="thirdcel"
		  type="text" 
		  /> Please enter yet another celebrity or politician.
		  <hr />
		  <input 
		  ref="crime"
		  type="text" 
		  /> Please enter a crime.
		  <hr />
		  <input 
		  ref="state"
		  type="text" 
		  /> Please enter a state.
		  <hr />
		  <button onClick={this.reveal.bind(this)}>Result</button>
		  <div id="res"><h2>{this.state.result}</h2></div>
		</div>
	  )
  }
}

export default Politics;