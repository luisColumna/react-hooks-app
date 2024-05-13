import React from 'react';

interface props {
    increment: Function
}
export const ShowIncrement = React.memo(({ increment }: props) => {
    console.log(' Me volví a generar :( ');
    return(
        <button
            className="btn btn-primary"
            onClick={()=>{
                increment();
            }}
        >
            Incrementar
        </button>
    )
})