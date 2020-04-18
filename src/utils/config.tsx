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
			'Used for state management',
			'Alternative to useState',
			'useReducer vs useState'
		]
	},
	ureducermore: {
		name: 'useReducer More',
		items: [
			'With useContext',
			'Fetching Data With useState',
			'Fetching Data With useReducer',
			'vs useState'
		],
		kb: [
			'useReducer for local state management but combine with useContext for global state management'
		]
	},
	uothers: {
		name: 'The Others',
		items: ['useRef', 'useRef Dom', 'useCallback', 'useMemo']
	},
	ucustom: {
		name: 'Custom Hooks',
		items: ['useDocumentTitle', 'useCounter', 'useInput']
	}
};
