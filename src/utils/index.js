import { useDispatch, useSelector } from 'react-redux';
import { increment , decrement} from '../redux/slices/counterSlice';
import { store } from '../redux/store';

export const IncrementCounterSlice = () => {
  console.log("checking increment",store.getState().counter.count);
  store.dispatch(increment());
}

export const DecrementCounterSlice = () => {
  store.dispatch(decrement());
}