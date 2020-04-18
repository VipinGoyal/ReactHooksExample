/* UseState */
import CounterClassUs from './uState/CounterClass';
import WithPrevState from './uState/WithPrevState';
import WithArray from './uState/WithArray';
import WithObject from './uState/WithObject';

/* UseEffect*/
import CounterClassUe from './uEffect/CounterClass';
import CounterHook from './uEffect/CounterHook';
import MouseClass from './uEffect/MouseClass';
import MouseHook from './uEffect/MouseHook';
import MouseHookContainer from './uEffect/MouseHookContainer';

/* UseEffect More*/
import IntervalCounterClass from './uEffectMore/IntervalCounterClass';
import IntervalCounterHook from './uEffectMore/IntervalCounterHook';
import DataFetching from './uEffectMore/DataFetching';
import DataFetching1 from './uEffectMore/DataFetching1';
import DataFetching2 from './uEffectMore/DataFetching2';

/* UseContext */
import WithContextConsumer from './uContext/WithContextConsumer';
import WithContextHook from './uContext/WithContextHook';

/* UseReducer */
import SimpleStateAction from './uReducer/SimpleStateAction';
import ComplexStateAction from './uReducer/ComplexStateAction';
import MultipleuseReducers from './uReducer/MultipleuseReducers';

/* UseReduce More */
import WithUseContext from './uReducerMore/WithUseContext';
import DataFetchingWuState from './uReducerMore/DataFetchingWuState';
import DataFetchingWuReducer from './uReducerMore/DataFetchingWuReducer';

export const SubComponents = {
	ustate: [CounterClassUs, WithPrevState, WithObject, WithArray],
	ueffect: [
		CounterClassUe,
		CounterHook,
		MouseClass,
		MouseHook,
		MouseHookContainer
	],
	ueffectmore: [
		IntervalCounterClass,
		IntervalCounterHook,
		DataFetching,
		DataFetching1,
		DataFetching2
	],
	ucontext: [WithContextConsumer, WithContextHook],
	ureducer: [SimpleStateAction, ComplexStateAction, MultipleuseReducers],
	ureducermore: [WithUseContext, DataFetchingWuState, DataFetchingWuReducer],
	uothers: [],
	ucustom: []
};
