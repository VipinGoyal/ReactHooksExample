import React, { useState, useEffect } from 'react';

const MouseHook = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const logMousePosition = e => {
		console.log('Mouse event');
		setX(e.clientX);
		setY(e.clientY);
	};

	useEffect(() => {
		console.log('useFffect called');
		window.addEventListener('mousemove', logMousePosition);
	});

	return (
		<div>
			Hooks - X - {x} Y - {y}
		</div>
	);
};

export default MouseHook;

// useEffect(() => {
// 	console.log('useFffect called');
// 	window.addEventListener('mousemove', logMousePosition);

// 	return () => {
// 		console.log('Component unmounting code');
// 		window.removeEventListener('mousemove', logMousePosition);
// 	};
// }, []);
