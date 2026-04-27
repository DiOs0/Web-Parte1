import {useState} from "react";
import HolaMundo3 from "./HolaMundo3.tsx";

function Contador(){

    const[contador,setContador]= useState(0);


    function handleUp() {
        setContador(contador+1);
    }

    function handleDown() {
        setContador(contador-1);

    }

    function handleMult() {
        setContador(contador*2);

    }

    return(<>
            <hr/>
            <div > Valor {contador}</div>
            <br/>
            <button onClick={handleUp}>+</button>
            <button onClick={handleDown}>-</button>
            <button onClick={handleMult}>*</button>
            <br/>
            <HolaMundo3 name="Contador" age={contador}/>


    </>
    )
}

export default Contador;