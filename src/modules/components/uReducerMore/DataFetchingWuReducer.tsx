import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
	loading: true,
	error: '',
	post: {}
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS':
			return {
				loading: false,
				post: action.payload,
				error: ''
			};
		case 'FETCH_ERROR':
			return {
				loading: false,
				post: {},
				error: 'Something went wrong!'
			};
		default:
			return state;
	}
};

const DataFetchingWuReducer = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		axios
			// .get(`https://jsonplaceholder.typicode.com/posts/1`)
			.get(`https://reqres.in/api/users/1`)
			.then(response => {
				// dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
				dispatch({ type: 'FETCH_SUCCESS', payload: response.data.data });
			})
			.catch(error => {
				dispatch({ type: 'FETCH_ERROR' });
			});
	}, []);
	return (
		<div>
			{/* {state.loading ? 'Loading' : state.post.title} */}
			{state.loading ? 'Loading' : state.post.email}
			{state.error ? state.error : null}
		</div>
	);
};

export default DataFetchingWuReducer;
