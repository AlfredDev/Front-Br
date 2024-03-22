function FormAddEmpleado() {

    const departamentos = [{
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
    return (
            <div className="">
                <h1 className="text-xl font-semibold mb-2 w-full text-center">Agregar Empleado</h1>
                <form action="" className="bg-white grid mt-5 p-5">
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
                                return (
                                    <option value={departamento.id}>{departamento.nombre}</option>
                                )
                            })
                        }
                    </select>
                        <div className="w-full">
                            <button className="btn-agregar mt-4 float-end">Agregar</button>
                        </div>
                </form>
            </div>

    )
        ;
}

export default FormAddEmpleado;