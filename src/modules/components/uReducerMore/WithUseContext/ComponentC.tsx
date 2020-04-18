import React from 'react';
import ComponentE from './ComponentE';

const ComponentC = () => {
	return (
		<div>
			Component C => Component E
			<ComponentE />
		</div>
	);
};

export default ComponentC;
