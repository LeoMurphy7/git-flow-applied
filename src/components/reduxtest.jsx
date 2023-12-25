import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment , decrement} from "../redux/slices/counterSlice";
import { IncrementCounterSlice , DecrementCounterSlice } from "../utils";

const ReduxTest = () => {
  const count = useSelector((state)=> state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={()=> IncrementCounterSlice()}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={()=> DecrementCounterSlice()}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default ReduxTest;
