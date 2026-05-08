import {useState} from "react";
import * as React from "react";
import {useNavigate} from "react-router-dom";

function Form1() {

    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();


        //navegar a la siguiente forma
        navigate("/form2", {state: {message: name}});
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <h2>Formulario 1 </h2>

                Nombre:<input
                type="test"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ingrese su nombre"

            />
                <div>{name}</div>
                <input type="submit" value="Enviar"/>
            </form>


        </>
    )

}

export default Form1;