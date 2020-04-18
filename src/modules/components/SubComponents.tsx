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
import IntervalCounterClass from './uEffectMore/IntervalCounterClass';
import IntervalCounterHook from './uEffectMore/IntervalCounterHook';
import DataFetching from './uEffectMore/DataFetching';
import DataFetching1 from './uEffectMore/DataFetching1';
import DataFetching2 from './uEffectMore/DataFetching2';
/* Fetching Data with UseEffect */

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
	ucontext: [],
	ureducer: [],
	ureducermore: [],
	uothers: [],
	ucustom: []
};
