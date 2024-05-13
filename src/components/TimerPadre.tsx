import React, { useState } from "react"
import { Timer } from "./Timer"


export const TimerPadre = () => {

    const [milliseconds, setMilliseconds] = useState(1000);

    return (
        <>
            <span>Milisegundos { milliseconds }</span>
            <br />

            <button className="btn btn-outline-success"
                onClick={ () => setMilliseconds( 1000 ) }>
                1000
            </button>

            <button className="btn btn-outline-success"
                onClick={ () => setMilliseconds( 2000 ) }>
                2000
            </button>

            <Timer milliseconds={ milliseconds } />
        </>
    );
}