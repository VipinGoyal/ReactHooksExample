import React from 'react';

const ChildComponent1 = (prop) => {
	console.log('ChildComponent1 Render');

	return (
		<>
			<span>Child Component 1</span>
			<br />
			<span>CC1: Name {prop.name}</span>
		</>
	);
};

export default React.memo(ChildComponent1);
