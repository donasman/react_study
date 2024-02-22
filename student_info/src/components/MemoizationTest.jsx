import React, { useMemo, useState } from 'react';

function MemoizationTest({ num1, num2 }) {

    const [ num3, setNum3 ] = useState(0);

    console.log("MemoizationTest 렌더링");

    const tempNum1 = useMemo(() => {
        console.log("memo: num1")
        return num1 * 10;
    }, [num1]);
    const tempNum2 = useMemo(() => {
        console.log("memo: num2")
        return num2 + 10000;
    }, [num2]);

    const tempNum3 = useMemo(() => {
        console.log("memo: num3")
        return num3 + 20000;
    }, [num3]);

    const tempNum4 = useMemo(() => {
        console.log("memo: num4")
        return num1 + num2;
    }, [num1, num2]);


    return (
        <>
            <button onClick={() => setNum3(num3 + 1)}>num3 증가</button>
            <h3>{tempNum1}</h3>       
            <h3>{tempNum2}</h3>       
            <h3>{tempNum3}</h3>       
            <h3>{tempNum4}</h3>       
        </>
    );
}

export default MemoizationTest;