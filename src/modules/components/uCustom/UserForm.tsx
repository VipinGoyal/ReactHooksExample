import React, { useState } from 'react';
import useInput from './hooks/useInput';

const UserForm = () => {
	// const [firstName, bindFirstName, resetFirstName] = useInput('');
	// const [lastName, bindLastName, resetLastName] = useInput('');

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const submitHandler = e => {
		e.preventDefault();
		alert(`Hello ${firstName} ${lastName}`);
		// resetFirstName();
		// resetLastName();
		setFirstName('');
		setLastName('');
	};
	return (
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<label>First Name</label>
					{/* <input type="text" {...bindFirstName} /> */}
					<input
						value={firstName}
						type="text"
						onChange={e => setFirstName(e.target.value)}
					/>
				</div>
				<div>
					<label>Last Name</label>
					{/* <input type="text" {...bindLastName} /> */}
					<input
						value={lastName}
						type="text"
						onChange={e => setLastName(e.target.value)}
					/>
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default UserForm;
