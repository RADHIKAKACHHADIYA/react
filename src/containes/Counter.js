import React from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { decrement, increment } from '../redux/action/counter.action';
import counter from "../redux/reducer/index";
 

function Counter(props) {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const handleincrement = () => {
        dispatch(increment())
    }
    const handledecrement = () => {
        dispatch(decrement())
    }
    return (
        <div>
           <p> count is a : {counter.counter}</p>
           <button onClick={handleincrement}> + </button>
           <button onClick={handledecrement}> - </button>
        </div>
    );
}

export default Counter;