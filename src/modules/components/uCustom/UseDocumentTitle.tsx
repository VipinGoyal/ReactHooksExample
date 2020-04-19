import React, { useState, useEffect } from 'react';
// import useDocumentTitle from './hooks/useDocumentTitle';

const UseDocumentTitle = () => {
	const [count, setCount] = useState(0);
	// useDocumentTitle(count);
	useEffect(() => {
		document.title = `Count ${count}`;
	}, [count]);

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Count - {count}</button>
		</div>
	);
};

export default UseDocumentTitle;
