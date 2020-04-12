/* UseState */
import CounterClassUs from './uState/CounterClass';
import WithPrevState from './uState/WithPrevState';
import WithArray from './uState/WithArray';
import WithObject from './uState/WithObject';

/* UseEffect*/
import CounterClassUe  from './uEffect/CounterClass';

export const SubComponents = {
	ustate: [CounterClassUs, WithPrevState, WithArray, WithObject],
	ueffect:[CounterClassUe]
};
