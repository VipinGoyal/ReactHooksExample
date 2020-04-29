import { useState, useEffect } from 'react';

const debounce = (func: () => void, timeOut: number = 500) => {
	let timer;
	return function(event?: Event) {
		if (timer) clearTimeout(timer);
		timer = setTimeout(func, timeOut, event);
	};
};

const getWidth = () => {
	if (typeof window !== undefined) {
		return (
			window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth
		);
	}
	return 0;
};

const getHeight = () => {
	if (typeof window !== undefined) {
		return (
			window.innerHeight ||
			document.documentElement.clientHeight ||
			document.body.clientHeight
		);
	}
	return 0;
};

const useCurrentSize = (debounceInterval = 200) => {
	const [size, setSize] = useState({ width: getWidth(), height: getHeight() });
	useEffect(() => {
		const handleResize = () => {
			const width = getWidth();
			const height = getHeight();
			setSize({ width, height });
		};
		const debouncedHandleResize = debounce(handleResize, debounceInterval);
		window.addEventListener('resize', debouncedHandleResize);
		return () => {
			window.removeEventListener('resize', debouncedHandleResize);
		};
	}, [debounceInterval]);

	return size;
};

export default useCurrentSize;
