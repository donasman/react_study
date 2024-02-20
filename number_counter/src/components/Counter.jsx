import { useState } from "react";
import CounterInput from "./CounterInput";
import CountButton from "./CountButton";

function Counter() {
// number - 0대입
    const [ number, setNumber ] = useState(0);
    const [ count, setCount] = useState(0);

    const handleOnIncrease = () => {
        setNumber(number + count);
    };
    const handleOnDecrease = () => {
        setNumber(number - count);
    };


    return (
        <>
            <h1>{ number }</h1>
            <CounterInput setCount= { setCount }/>
            <CountButton title={ "-" } onClick={ handleOnDecrease }/>
            <CountButton title={ "+" } onClick={ handleOnIncrease }/>
        </>   
    );
}

export default Counter;