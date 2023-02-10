import React, { useEffect, useState } from 'react'

const Comp1 = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);


    useEffect(() => {
        alert("Clicked");
    }, [])
    return (
        <>
            <button onClick={(() => {
                setNum(num + 1);
            })}>Click me {num}</button>
            <br />
            <button onClick={(() => {
                setNums(nums + 1);
            })}>Click me {nums}</button>
        </>
    )
}

export default Comp1;
