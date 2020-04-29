import React, { useState, useEffect, createRef } from 'react';
import axios from 'axios';

const DataFetching2 = () => {
	const [post, setPost] = useState({});
	const [id, setId] = useState(1);

	const inputRef = createRef();

	useEffect(() => {
		axios
			// .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.get(`https://reqres.in/api/users/${id}`)
			.then(res => {
				// console.log(res);
				// setPost(res.data);
				console.log(res.data.data);
				setPost(res.data.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, [id]);

	const handleClick = () => {
		setId(inputRef.current.value);
		console.log('inputRef current val', inputRef.current.value);
	};

	return (
		<div>
			<input type="text" ref={inputRef} placeholder="Type UserId here ..." />
			<button type="button" onClick={handleClick}>
				Fetch Post
			</button>
			{/* <div>{post.title}</div> */}
			<div>{post.email}</div>
		</div>
	);
};

export default DataFetching2;
