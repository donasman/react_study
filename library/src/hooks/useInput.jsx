import { useEffect, useState } from "react"
import { REGEX } from "../constants/regex";

// 회원가입 기능
export const useInput = (property) => {
    const [ value, setValue ]  = useState("");
    const [ message, setMessage ] = useState(null);

    useEffect(() => {
        if(!value) {
            setMessage(() => null);
            return;
        }
        const regexEntires = Object.entries(REGEX);
        for(let [ k, v ] of regexEntires) {
            if(property === k) {
                if(v.regexr.test(value)) {
                    setMessage(() => {
                        return {
                            type:"success",
                            text: ""
                        }
                    })
                } else {
                    setMessage(() => {
                        return {
                            type:"error",
                            text: v.text
                        }
                    })
                };
            }

        }
    }, [value])

    const handleOnChange = (e) => {
        setValue(() => e.target.value);
    }
    
    return [ value, handleOnChange, message, setValue, setMessage ];
}