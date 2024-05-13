import { ChangeEvent, useState } from "react";

export const useForm = <T extends Object >( initState: T ) => {

    const [ formulario, setFormulario ] = useState( initState );

    const onInputChange = ( { target }: ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = target;

        setFormulario({
            ...formulario,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormulario(initState);
    }

    return {
        formulario,
        ...formulario,// para desestructurar directamente cuando se llame el hook
        onInputChange,
        onResetForm,
    }
}