import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching2 = () => {
	const [post, setPost] = useState({});
	const [id, setId] = useState(1);

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => {
				console.log(res);
				setPost(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, [id]);

	return (
		<div>
			<input type="text" value={id} />
			<button type="button" onClick={() => setId(id)}>
				Fetch Post
			</button>
			<div>{post.title}</div>
		</div>
	);
};

export default DataFetching2;