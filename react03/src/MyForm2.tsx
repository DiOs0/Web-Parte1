function MyForm2(){

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=> {
        alert(`texto ingresado: '${name}'`)
    }


    function buscar(formData:FormData) {
        const nombre= formData.get("nombre");
        const edad= formData.get("edad");

        alert(`Nombre: ${nombre}, Edad: ${edad}`)

    }

    return(
        <>
            <form action={buscar}>
                <div>
                    Nombre:<input type="text" name="nombre" />
                    <br/>
                    Edad: <input type="text" name="edad"/>
                </div>
                <input type="submit" value="Enviar"/>
                <br/>
            </form>
        </>


    )
}
export default MyForm2;