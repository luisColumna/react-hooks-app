import React, { ChangeEvent, useState } from "react"
import { useForm } from "../hooks/useForm"


interface FormData {
    email: string;
    nombre: string;
    edad: number;
}

export const Formulario = () => {

    const { formulario, onInputChange, email, nombre, edad } = useForm<FormData>({
        email: 'luis@gmail.com',
        nombre: 'Luis Columna',
        edad: 33
    });
    // const [ formulario, setFormulario ] = useState({
    //     emial: '',
    //     nombre: '',
    // });

    // const handleChange = ( { target }: ChangeEvent<HTMLInputElement> ) => {
    //     const { name, value } = target;

    //     setFormulario({
    //         ...formulario,
    //         [ name ]: value
    //     });
    // }

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                    type="email"
                    className="form-control" 
                    name="email"
                    value={ email }
                    onChange={ onInputChange }
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input
                    type="text"
                    className="form-control" 
                    name="nombre"
                    value={ nombre }
                    onChange={ onInputChange }
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Edad:</label>
                <input
                    type="number"
                    className="form-control" 
                    name="edad"
                    value={ edad }
                    onChange={ onInputChange }
                />
            </div>

            <pre>{ JSON.stringify(formulario) }</pre>
        </form>
    )
}