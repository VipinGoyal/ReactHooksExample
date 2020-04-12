export const Section = {
	ustate: {
		name: 'useState',
		items: ['With Prev State', 'With Object', 'With Array'],
		kb: [
			'Only Call Hooks at the Top Level (not inside loops, conditions or nested functions)',
			'Only call Hooks from React Functions (not just any regular functions)'
		],
		def: true
	},
	ueffect: {
		name: 'useEffect',
		items: [
			'Conditionally',
			'OnlyOnce-Class',
			'OnlyOnce-Hook',
			'Cleanup',
			'Incorrect-Dependency-Class',
			'Inc-Dep-Hook'
		],
		kb: [
			'The Effect Hook lets you perform side effects in functional components',
			'It is a close replacement for componentDidMount, componentDidUpdate, componentWillUnmount',
			'Use Multiple Effects to Separate Concerns'
		],
		def: true
	},
	ueffectdata: {
		name: 'Fetching Data with UseEffect',
		items: ['Example 1', 'Example 2', 'Example 3'],
		def: true
	},
	ucontext: {
		name: 'useContext',
		items: ['Example 1', 'Example 2', 'Example 3'],
		def: true
	},
	ureducer: {
		name: 'useReducer',
		items: ['Simple State & Action', 'Complex State & Action', 'Multiple'],
		def: true
	},
	ureducermore: {
		name: 'useReducer More',
		items: [
			'With useContext',
			'Fetching Data 1',
			'Fetching Data 2',
			'vs useState'
		],
		def: true
	},
	uothers: {
		name: 'The Others',
		items: ['useRef', 'useRef Dom', 'useCallback', 'useMemo'],
		def: true
	},
	ucustom: {
		name: 'Custom Hooks',
		items: ['useDocumentTitle', 'useCounter', 'useInput'],
		def: false
	}
};
