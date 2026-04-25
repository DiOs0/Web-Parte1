
import * as React from "react";
import HolaMundo from "./HolaMundo.tsx";
import HolaMundo2 from "./HolaMundo2.tsx";


function App() {

  //No usar la palabra get en el get, pero si en el set, esto es para definir una variable
  const [text,setText] = React.useState("");

  const handleClick=()=>{
    //alert("Hello World!");
    if(text===""){
      setText("React");
    }else{
      setText("");
    }
  }

  return (
      //El fragmento es lo que se va a mostrar en la pantalla
      //Aqui solo se puede poner expresiones
    <>
      Hola <span>{text}</span>
      <br/>
      <button onClick={
        handleClick
      }>Click</button>
      <br/>
      <h1>Lo de abajo es un componente</h1>
      <HolaMundo></HolaMundo>
      <h1>Lo de abajo es otro componente</h1>
      <HolaMundo2 name="Diego" edad={22}/>
      <HolaMundo2 name="Carlos" edad={33}/>
    </>
  )
}

export default App
