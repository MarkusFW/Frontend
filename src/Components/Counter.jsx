import "./Counter.css"
import React, { useState } from "react"

function Counter () {

    const [arr, setArr] = useState([])

    function addPluss () {
        setArr(prevArr => [prevArr, "+"])
    }
    function addMinus () {
        setArr(prevArr => [prevArr, "-"])
    }

    return (
        <div className="counter__container">
            <button onClick={addMinus}>-</button>   
            <button onClick={addPluss}>+</button>
            {arr.toString()}
        </div>
    )
}

export default Counter