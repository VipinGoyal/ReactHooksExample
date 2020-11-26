import React from 'react';

const ChildComponent = (prop) => {
	console.log('ChildComponent Render');

	return (
		<>
			<span>Child Component</span>
      <br />
			<span>CC: Count {prop.count}</span>
		</>
	);
};

export default React.memo(ChildComponent);
