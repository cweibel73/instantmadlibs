import React from 'react';


class Band extends React.Component {
  constructor(){
	  super();
	  this.state = {
		  result: ''
		  }
  }
  reveal() {
	this.setState({
		result: "It was announced today that "
		+this.refs.singer.value+
		" will be the new lead singer for "
		+this.refs.band.value+
		". This raised the ire of "
		+this.refs.band.value+
		" fan "
		+this.refs.celebrity.value+
		", who felt that "
		+this.refs.othersinger.value+
		" would have been a more appropriate choice."
		
		
		})  
  }
  
  
  render(){
      return(
	    <div>
		  <input 
		  ref="band"
		  type="text" 
		  /> Please enter the name of a band.
		  <hr />
		  <input 
		  ref="singer"
		  type="text" 
		  /> Please enter the name of a singer.
		  <hr />
		  <input 
		  ref="celebrity"
		  type="text" 
		  /> Please enter the name of a celebrity.
		  <hr />
		  <input 
		  ref="othersinger"
		  type="text" 
		  /> Please enter the name of another singer.
		  <hr />
		  <button onClick={this.reveal.bind(this)}>Result</button>
		  <div id="res"><h2>{this.state.result}</h2></div>
		</div>
	  )
  }
}

export default Band;