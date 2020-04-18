import React, { useReducer } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

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

export const CountContext = React.createContext();

const WithUseContext = () => {
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<CountContext.Provider
			value={{ countState: count, countDispatch: dispatch }}
		>
			Count : {count}
			<ComponentA />
			<ComponentB />
			<ComponentC />
		</CountContext.Provider>
	);
};

export default WithUseContext;