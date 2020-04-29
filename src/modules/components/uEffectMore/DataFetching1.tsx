import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching = () => {
	const [id, setId] = useState(1);
	const [post, setPost] = useState({});

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
	// }, []);
	}, [id]);

	return (
		<div>
			<input type="text" value={id} onChange={e => setId(e.target.value)} />
			{/* <div>{post.title}</div> */}
			<div>{post.email}</div>
		</div>
	);
};

export default DataFetching;
