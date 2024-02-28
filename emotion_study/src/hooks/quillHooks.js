import { useState } from "react";

export function useQuillInput() {
    const [ quillValue, setQuillValue] = useState("");

    const onchange = (value) => {
        setQuillValue(() => value);
    }
    return [ quillValue, onchange ];
}