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
import IntervalCounterClass from './uEffect/IntervalCounterClass';
import IntervalCounterHook from './uEffect/IntervalCounterHook';

/* Fetching Data with UseEffect */

export const SubComponents = {
	ustate: [CounterClassUs, WithPrevState, WithObject, WithArray],
	ueffect: [
		CounterClassUe,
		CounterHook,
		MouseClass,
		MouseHook,
		MouseHookContainer,
		IntervalCounterClass,
		IntervalCounterHook
	],
	ueffectdata: [],
	ucontext: [],
	ureducer: [],
	ureducermore: [],
	uothers: [],
	ucustom: []
};
