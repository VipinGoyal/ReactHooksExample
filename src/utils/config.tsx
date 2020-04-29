export const Section = {
	ustate: {
		name: 'useState',
		items: ['With Class', 'With Prev State', 'With Object', 'With Array'],
		kb: [
			'Only Call Hooks at the Top Level (not inside loops, conditions or nested functions)',
			'Only call Hooks from React Functions (not just any regular functions)'
		]
	},
	ueffect: {
		name: 'useEffect',
		items: [
			'With Class',
			'Conditionally',
			'OnlyOnce-Class',
			'OnlyOnce-Hook',
			'Cleanup'
		],
		kb: [
			'The Effect Hook lets you perform side effects in functional components',
			'It is a close replacement for componentDidMount, componentDidUpdate, componentWillUnmount',
			'Use Multiple Effects to Separate Concerns'
		]
	},
	ueffectmore: {
		name: 'UseEffect More',
		items: [
			'Incorrect-Dependency-Class',
			'Inc-Dep-Hook',
			'Fetching Data',
			'Fetching Data 1',
			'Fetching Data 2'
		],
		kb: [
			`If we think Dependecy array is a way to specify when you want to re-run the effect, you're going to run into problems`,
			'Dependecy array should be thought of as a way to let react know about everything that effect must watch for changes',
			'we can have multiple useEffect to group related logic',
			'useEffect helps us in grouping related code together unlike in class'
		]
	},
	ucontext: {
		name: 'useContext',
		items: ['WithConext Consumer', 'WithContext Hook'],
		kb: [
			'Context provides a way to pass data through the component tree Without having to pass props down manually to every level',
			'useful in case of certain types of props (e.g. locale preference, UI theme)',
			'useContext makes it simpler to consume context, Creating Context and providing Context remains same'
		]
	},
	ureducer: {
		name: 'useReducer',
		items: ['Simple State & Action', 'Complex State & Action', 'Multiple'],
		kb: [
			'Alternative to useState, Used for state management',
			'array.reduce(reducer, initialValue)  VS  useReducer(reducer, initialValue)',
			'singleValue = reducer(accumulator, itemValue) VS newState = reducer(currentState, action)',
			'reduce method returns a single value VS useReducer returns pair of values [newState, dispatch]'
		]
	},
	ureducermore: {
		name: 'useReducer More',
		items: [
			'With useContext',
			'Fetching Data With useState',
			'Fetching Data With useReducer'
		],
		kb: [
			'useReducer for local state management but combine with useContext for global state management'
		]
	},
	uothers: {
		name: 'The Others',
		items: [
			'useRef Class',
			'useRef Hook',
			'useRef Dom',
			'useCallback',
			'useMemo'
		],
		kb: [
			'UseRef can be used as generic container to hold immutable value similar to  instance property on class component',
			'its value doesnt change when component re-render, also this doesnt cause re-render when its value change',
			'React.memo is higher order component, prevent functional component to re-render if its props / state dont changed not related to hook memo',
			'useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed',
			'It is useful when passing callbacks to optimized child components that rely on reference quality to prevent unnecessary renders',
			'useMemo is a hook that will only recompute, that cache value when one of the dependency has changed so to avoid expensive calculations on every render ',
			'useCallBack caches the provided function instance itslef whereas useMemo invokes function and cache its result',
			'useCallback will be used to cache function and useMemo is used to cache invoked function result'
		]
	},
	// uothersmore: {
	// 	name: 'The Others More',
	// 	items: ['Blinky Render', 'useLayoutEffect']
	// },
	ucustom: {
		name: 'Custom Hooks',
		items: ['useDocumentTitle', 'useCounter', 'useInput', 'useCurrentSize'],
		kb: [
			'By extracting component logic in reusable functions to create custom hook',
			'js function whose name starts with "use"',
			'custom hook can call other hooks if required',
			'share logic - Alternative to HOCs and Render props'
		]
	}
};
