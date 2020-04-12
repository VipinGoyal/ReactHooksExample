import React, { useState, useEffect } from 'react';

const IntervalCounterHook = () => {
	const [count, setCount] = useState(0);

	const tick = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		const interval = setInterval(tick, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return <div>{count}</div>;
};

export default IntervalCounterHook;

// const doSomething = () =>{
//   console.log(someProps);
// }

// useEffect(() => {
//  doSomething()
// 	const interval = setInterval(tick, 1000);
// 	return () => {
// 		clearInterval(interval);
// 	};
// }, [count]);

// useEffect(() => {
//  // const doSomething = () =>{
//   console.log(someProps);
// }
// doSomething()
// 	const interval = setInterval(tick, 1000);
// 	return () => {
// 		clearInterval(interval);
// 	};
// }, [count, someProps]);

// useEffect(() => {
// 	const interval = setInterval(tick, 1000);
// 	return () => {
// 		clearInterval(interval);
// 	};
// }, [count]);

// const tick = () => {
// 	setCount(count + 1);
// };

// const tick = () => {
//   setCount(prevCount => prevCount + 1);
// };
