export const Section = {
	ustate: {
		name: 'useState',
		items: ['With Prev State', 'With Object', 'With Array'],
		def: true
	},
	ueffect: {
		name: 'useEffect',
		items: ['After Render', 'Only Once', 'Cleanup', 'Incorrect Dependency'],
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
		items: ['useRef', 'useRef Dom', 'useCallback', 'useMemo' ],
		def: true
	},
	ucustom: {
		name: 'Custom Hooks',
		items: ['useDocumentTitle', 'useCounter', 'useInput'],
		def: false
	}
};
