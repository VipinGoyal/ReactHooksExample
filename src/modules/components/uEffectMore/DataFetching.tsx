import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios
			// .get(`https://jsonplaceholder.typicode.com/posts`)
			.get(`https://reqres.in/api/users`)
			.then(res => {
				// console.log(res);
				// setPosts(res.data);
				console.log(res.data.data);
				setPosts(res.data.data);
			})
			.catch(err => {
				console.log(err);
			});
	});
	// }, []);

	return (
		<div>
			<ul>
				{posts.map(post => (
					// <li key={post.id}>{post.name}</li>
					<li key={post.id}>{post.email}</li>
				))}
			</ul>
		</div>
	);
};

export default DataFetching;
