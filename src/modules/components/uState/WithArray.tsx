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

	const editItem = (index, value) => {
		const stateItems = [...items];
		stateItems[index] = value;
		setItems(stateItems);
	};

	const removeItem = (index) => {
		let stateItems = [...items];
		stateItems = [...stateItems.slice(0, index), ...stateItems.slice(index+1)];
		setItems(stateItems);
	};

	return (
		<div>
			<button onClick={addItem}>Add a number</button>
			<ul>
				{items.map((item, index) => (
					// <li key={item.id}>{item.value}</li>
					<>
						<input
							type="text"
							value={item.value}
							onChange={(e) => editItem(index, e.target.value)}
						/>
						<span onClick={e=>removeItem(index)}>x</span>
						<br />
					</>
				))}
			</ul>
		</div>
	);
};

export default WithArray;
