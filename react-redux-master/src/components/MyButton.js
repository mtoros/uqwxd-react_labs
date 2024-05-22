
import React from 'react'
import { useDispatch} from 'react-redux';
import increment from '../actions'

const MyButton = ()=>{
    let dispatch = useDispatch();
    return (
        <button onClick={()=>dispatch(increment(5))}>Increase counter</button>
    );
}

export default MyButton;