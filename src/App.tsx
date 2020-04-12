import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MainComponent from './modules/components';

import { HomePage } from './modules/components/HomePage';

function App() {
	return (
		<div className="App">
			<h1>React Hooks</h1>
			<Router>
				<Route exact path="/ustate" component={MainComponent} />
				<Route exact path="/ueffect" component={MainComponent} />
				<Route exact path="/" component={HomePage} />
			</Router>
			<h3>Happy Web Wednesday {new Date().toLocaleDateString()}</h3>
		</div>
	);
}
export default App;
