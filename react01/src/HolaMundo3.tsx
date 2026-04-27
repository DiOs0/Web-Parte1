
//Ponerle export a esto para que me salga en el App.tsx
export interface Hello3Props {
    name:string,
    age?:number
}

function HolaMundo(props:Hello3Props){

    return (

        <>
            <hr/>
            <h4>Hola mundo {props.name}</h4>
            {props.age &&<h4>Edad:{props.age}</h4>}
            <h4>La Edad es {props.age}</h4>
            <br/>
        </>
    )
}


export default HolaMundo