import { useState } from "react";

export function useInput() {
    const [ inputValue, setInputValue ] = useState("");

    const onchange = (e) => {
        const {value} = e.target;
        setInputValue(() => value); 
    }

    return [inputValue, onchange]
}
/**
 * 
 * @param {*} maxSize 
 * @returns 
 */
export function useMaxSizeValidateInput(maxSize) {
    const [ inputValue, setInputValue ] = useState("");

    const onchange = (e) => {
        const {value} = e.target;
        if(value.length <= maxSize) {
            setInputValue(() => value);
        }
    }

    return [ inputValue, onchange ]
}