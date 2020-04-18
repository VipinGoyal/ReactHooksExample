import React, { useReducer } from 'react';

// compare to redux, state is not object and action doesn't contain type here
// we can't pass metadata in this case

const initialState = 0;
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		case 'reset':
			return initialState;
		default:
			return state;
	}
};

const SimpleStateAction = () => {
	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<div>Count = {count}</div>
			<button onClick={() => dispatch('increment')}>Increment</button>
			<button onClick={() => dispatch('decrement')}>Decrement</button>
			<button onClick={() => dispatch('reset')}>Reset</button>
		</div>
	);
};

export default SimpleStateAction;
