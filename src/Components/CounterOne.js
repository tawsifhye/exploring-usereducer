

import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            if (state > 0) {
                return state - 1;
            }
            else {
                return initialState;
            }

        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const CounterOne = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        < div style={{ textAlign: 'center' }} >
            <div>Count- {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')} >Decrement</button>
            <button onClick={() => dispatch('reset')} >Reset</button>
        </ div>
    );
};

export default CounterOne;