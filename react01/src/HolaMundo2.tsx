
//Ejemplo de componente personalizado
function HolaMundo(props:{name:string,edad:number}){

    const handleClick=()=>{
        //alert("Click en el componente");
        alert(`Mi nombre es ${props.name} y mi edad es ${props.edad}`);

    }

    return (

        <>
            <h4>Hola mundo mi nombre es {props.name} y mi edad es {props.edad}</h4>
            <p>Esto es un componente personalizado</p>
            <button onClick={handleClick} id={'myButton'}>Boton</button>
            <br/>
        </>
    )
}


export default HolaMundo