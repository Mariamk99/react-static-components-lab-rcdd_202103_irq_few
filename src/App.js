import React, { Component } from 'react';
import CatComponent from './components/CatComponent.js';
import GraceHopperQuoteComponent from './components/GraceHopperQuoteComponent.js';
import MouseComponent from './components/MouseComponent.js';



class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;

