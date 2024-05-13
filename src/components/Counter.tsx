import React, { useState } from "react"

export const Counter = () => {
    
    const [count, setCount] = useState(0)

    const increase = (num: number = 1): void => {
        setCount( count + num);
    }
    
    return (
        <div className="mt-0">
            <h3>Counter:</h3>
            <span>Valor: { count }</span>
            <br />
            <button
                onClick={ () => increase() }
                className="btn btn-outline-primary mt-2"
            >
                +1
            </button>
            <button
                onClick={ () => increase(2) }
                className="btn btn-outline-primary mt-2"
            >
                +2
            </button>
            <button
                onClick={ () => setCount(0) }
                className="btn  btn-outline-danger mt-2"
            >
                Reset
            </button>
        </div>
    )
}

