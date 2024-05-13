import React from "react";
import { useState } from "react"


interface User {
    uuid: string;
    name: string;
}


export const User = () => {
    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uuid: 'ABC123',
            name: 'Luis Columna',
        });
    }

    return(
        <div className="mt-1">
           <h3>Usuario:</h3>

           <button
              onClick={ login }
              className="btn btn-outline-primary"
            >
                Login
            </button>
            {
                (!user)
                ? <pre> No hay usuario</pre>
                : <pre>{ JSON.stringify( user )}</pre> 
            } 
            
        </div>
    )
}