import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MainComponent from './modules/components';
import { Section } from './utils/config';
import { HomePage } from './modules/components/HomePage';

const sectionPath = Object.keys(Section);

const App = () => {
	return (
		<div className="App">
			<h1>React Hooks</h1>
			<Router>
				{sectionPath.map((section, index) => (
					<Route
						key={index}
						exact
						path={`/${section}`}
						component={MainComponent}
					/>
				))}
				<Route exact path="/" component={HomePage} />
			</Router>
			<h3>Happy Web Wednesday {new Date().toLocaleDateString()}</h3>
		</div>
	);
};
export default App;
