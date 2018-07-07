import React from 'react';
import Celeb from './Celeb';
import Dog from './Dog';
import Politics from './Politics';
import Band from './Band';
import Fight from './Fight';

class App extends React.Component {
  constructor(){
	  super();
	  this.state = {
		  result: ''
		  }
  }
   dog() {
	  this.setState({
		  choice: <Dog />
	  })
  }
  celeb() {
	  this.setState({
		  choice: <Celeb />
	  })
  }
  politics() {
	  this.setState({
		  choice: <Politics />
	  })
  }
  band() {
	  this.setState({
		  choice: <Band />
	  })
  }
  fight() {
	  this.setState({
		  choice: <Fight />
	  })
  }
  render(){
	  return(
	    <div>
		  <h1>INSTANT MAD LIBS</h1>
		  <h2>Please click a selection button below!</h2>
		  
		  <button onClick={this.celeb.bind(this)}>Celebrity Appearance</button>
		  <button onClick={this.dog.bind(this)}>Dog Adventures</button>
		  <button onClick={this.politics.bind(this)}>The World of Politics</button>
		  <button onClick={this.band.bind(this)}>Music Controversy</button>
		  <button onClick={this.fight.bind(this)}>Celebrity Fight Debut</button>
		  <div><h2>{this.state.choice}</h2></div>
		  
		</div>
		);
}

}

export default App;


