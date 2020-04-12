import React, { useState } from 'react';

interface IState {
  id: number;
  value: number;
}

const WithArray = () => {
	const [items, setItems] = useState<IState[]>([]);
	const addItem = () => {
		setItems([
			...items,
			{
				id: items.length,
				value: Math.floor(Math.random() * 10) + 1
			}
		]);
	};

	return (
		<div>
			<button onClick={addItem}>Add a number</button>
			<ul>
				{items.map(item => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
		</div>
	);
};

export default WithArray;
