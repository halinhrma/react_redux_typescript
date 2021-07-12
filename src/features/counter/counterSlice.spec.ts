import counterReducer, {
  CounterState,
  increment,
  decrement,
  incrementByAmount,
  incrementIfOdd,
} from './counterSlice';

import configureStore from 'redux-mock-store'
import thunk, { ThunkDispatch } from 'redux-thunk'
interface counter {
  counter: CounterState
}
const initialState: CounterState = {
  value: 3,
  status: 'idle',
};
describe('counter reducer', () => {
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });

  
});


describe('counter incrementByAmount async ', () => {

  type AppAction = ThunkDispatch<CounterState, undefined, any>;
  const middleware = [thunk]
  const mockStore = configureStore<counter, AppAction>(middleware);
  
  it('should handle incrementByAmount', () => {
    const store = mockStore({ counter: initialState });
    const action = [{ type: "counter/incrementByAmount", "payload": 19 }];
    store.dispatch(incrementIfOdd(19));
    expect(store.getActions()).toStrictEqual(action);
  });
});