import React, { Component } from 'react';

interface State {
	count: number;
}

class CounterClass extends Component<{}, State> {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		};
	}

	incrementCount = () => {
		this.setState(prevState => {
			return {
				count: prevState.count + 1
			};
		});
	};

	decrementCount = () => {
		this.setState({
			count: this.state.count - 1
		});
	};

	incrementFive = () => {
		for (let i = 0; i < 5; i++) {
			this.setState(prevState => {
				return {
					count: prevState.count + 1
				};
			});
		}
	};

	incrementFiveN = () => {
		for (let i = 0; i < 5; i++) {
			this.setState({ count: this.state.count + 1 });
		}
	};

	render() {
		return (
			<div>
				<span>Count : {this.state.count}</span>
				<br />
				<br />
				<br />
				<button onClick={this.incrementCount}>Increment</button>
				<button onClick={this.decrementCount}>Decrement</button>
				<button onClick={this.incrementFive}>Increment 5</button>
				<button onClick={this.incrementFiveN}>Increment 5 (N)</button>
			</div>
		);
	}
}

export default CounterClass;
