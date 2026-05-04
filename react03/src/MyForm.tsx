import {useState} from "react";
import * as React from "react";

function MyForm(){


    const [name,setName]= useState("");

   const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=> {
        alert(`texto ingresado: '${name}'`)
       //El comportamiento por defecto es que se envie al servidor
       //event?.preventDefault();
    }

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    Nombre:<input type="text" value={name} onChange={handleChange}/>
                </div>

                <input type="submit" value="Enviar"/>
                <input type="submit" value="Enviar2"/>
                <input type="button" value="boton normal"/>
                <br/>
                <div>
                    {name}
                </div>

            </form>

        </>
    )
}

export default MyForm;