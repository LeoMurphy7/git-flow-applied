import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment , decrement} from '../redux/slices/counterSliceTwo';

 const ReduxPersist = () => {
  const count = useSelector((state)=> state.counterTwo.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>This is redux persist</h1>
      <div>
        <button
          aria-label="Increment value"
          onClick={()=> dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={()=> dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default ReduxPersist;
