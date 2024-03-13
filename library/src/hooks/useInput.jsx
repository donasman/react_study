import { useState } from "react"

// 회원가입 기능
export const useInput = () => {
    const [ value, setValue ]  = useState("");

    const handleOnChange = (e) => {
        setValue(() => e.target.value);
    }
    
    return [ value, setValue, handleOnChange ];
}