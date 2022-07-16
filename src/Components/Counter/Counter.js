import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../Redux/State/CounterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <div className='card'>
            <div className='card-header bg-secondary'>
                <h3 className='text-white'>My Counter App</h3>
            </div>
            <div className='card-body'>
                <h1>{count}</h1>
                    <button onClick={()=>{dispatch(increment())}} className='btn btn-primary'>Increase</button>
                    <button onClick={()=>{dispatch(decrement())} }className='btn btn-danger mx-2'>Decrease</button>
            </div>
            
        </div>
    );
};

export default Counter;