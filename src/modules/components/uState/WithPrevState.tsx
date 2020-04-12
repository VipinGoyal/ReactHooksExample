import React, { useState } from 'react';

const WithPrevState = () => {
	const initialCount = 0;
	const [count, setCount] = useState(initialCount);
	const incrementFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount(prevCount => prevCount + 1);
		}
	};
	const incrementFiveN = () => {
		for (let i = 0; i < 5; i++) {
			setCount(count + 1);
		}
	};
	return (
		<>
			Count: {count}
			<br />
			<br />
			<br />
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>
				Increment
			</button>
			<button onClick={() => setCount(prevCount => prevCount - 1)}>
				Decrement
			</button>
			<button onClick={incrementFive}>Increment 5</button>
			<button onClick={incrementFiveN}>Increment 5 (N)</button>
		</>
	);
};

export default WithPrevState;
