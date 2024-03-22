function AddDepartamento() {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-2 w-full text-center">Agregar Departamento</h1>
            <hr />
            <form className="mt-3">
                <div className=" mb-3">
                    <div className="w-full">
                        <label>Nombre:</label>
                    </div>
                    <div className="w-full mt-1">
                        <input type="text" required className="w-full"/>
                    </div>
                </div>
                <hr />
                <div className="flex justify-end">
                    <button type="button" className="btn-agregar mt-3 float-right">Agregar</button>
                </div>
            </form>

        </div>
    );
}

export default AddDepartamento;