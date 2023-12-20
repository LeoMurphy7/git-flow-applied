import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment , decrement} from "../redux/slices/counterSlice";

const ReduxTest = () => {
  const count = useSelector((state)=> state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
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
  );
};

export default ReduxTest;