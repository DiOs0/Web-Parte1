
//Ejemplo de componente personalizado
function HolaMundo(){

    const handleClick=()=>{
        alert("Click en el componente");

    }

    return (

        <>
            <h4>Hola mundo!</h4>
            <p>Esto es un componente personalizado</p>
            <button onClick={handleClick}>Boton</button>
            <br/>
        </>
    )
}


export default HolaMundo