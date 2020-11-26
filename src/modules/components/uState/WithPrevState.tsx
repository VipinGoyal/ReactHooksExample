import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import ChildComponent1 from './ChildComponent1';

const WithPrevState = () => {
	const initialCount = 0;
	const [count, setCount] = useState(initialCount);

	console.log('Im rendering here');

	const incrementFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount((prevCount) => prevCount + 1);
		}
	};
	const incrementFiveN = () => {
		for (let i = 0; i < 5; i++) {
			setCount(count + 1);
		}
	};
	return (
		<>
			<ChildComponent count={count} />
			<br />
			Count: {count}
			<br />
			<br />
			<br />
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Increment
			</button>
			<button onClick={() => setCount((prevCount) => prevCount - 1)}>
				Decrement
			</button>
			<button onClick={incrementFive}>Increment 5</button>
			<button onClick={incrementFiveN}>Increment 5 (N)</button>
			<ChildComponent1 name={'Vipin Goyal'}/>
		</>
	);
};

export default React.memo(WithPrevState);
