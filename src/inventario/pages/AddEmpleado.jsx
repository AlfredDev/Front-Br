function addEmpleado(){
    const departamentos=[{
        id: 1,
        nombre: "Recursos Humanos"
    },
{
    id: 2,
    nombre: "Recepción"
},
{
    id: 3,
    nombre: "Mantenimiento"
},
{
    id: 4,
    nombre: "Animación"
}]
    return(
        <div className="fondo-form">
            <div className="flex justify-center">
                <form action="" className="bg-white grid w-2/5 mt-5 p-5">
                    <label htmlFor="">Nombre:</label>
                    <input type="text" />
                    <label htmlFor="">Apellido Paterno:</label>
                    <input type="text" />
                    <label htmlFor="">Apellido Materno:</label>
                    <input type="text" />
                    <label htmlFor="">Departamento:</label>
                    <select name="" id="">
                    {
                        departamentos.map(departamento => {
                            return(
                                <option value={departamento.id}>{departamento.nombre}</option>
                            )
                        })
                    }
                    </select>

                    <button className="btn-agregar mt-4">Agregar</button>
                </form>
            </div>

        </div>
    )
    ;
}

export default addEmpleado;