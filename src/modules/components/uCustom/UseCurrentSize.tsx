import React from 'react';
import useCurrentSize from './hooks/useCurrentSize';

const UseCurrentSize = () => {
	const size = useCurrentSize();

	const { width, height } = size;

	return (
		<div>
			<span>
				Current Width : <b>{width}</b>
			</span>
			<br />
			<span>
				Current Height : <b>{height}</b>
			</span>
		</div>
	);
};

export default UseCurrentSize;
