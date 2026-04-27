import {useEffect, useState} from "react";

function Contador(){


    const[contador,setContador]= useState(0);

    useEffect(()=>{
        console.log("componenete montado");

        //Cuando el componente se desmonta
        return ()=> console.log("Componente desmontado");
        })

    useEffect(()=>{
        console.log(`componenete cambiado a ${contador}`);
    },[contador])






    function handleUp() {
        setContador(contador+1);
    }

    function handleDown() {
        setContador(contador-1);

    }

    return(<>
            <hr/>
            <div > Valor {contador}</div>
            <br/>
            <button onClick={handleUp}>+</button>
            <button onClick={handleDown}>-</button>


    </>
    )
}

export default Contador;