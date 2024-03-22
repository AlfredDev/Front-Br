import { RollerShades } from "@mui/icons-material";

function FormAddUser() {
    const roles=[{
        id:1,
        nombre:'Administrador'
    },{
        id:2,
        nombre:'Usuario'
    }

    ]
    return (
        <div className="">
            <h1 className="text-xl font-semibold mb-2 w-full text-center">Agregar Empleado</h1>
            <form action="" className="bg-white grid">
                <label htmlFor="">Nombre:</label>
                <input type="text" />
                <label htmlFor="">Apellido Paterno:</label>
                <input type="text" />
                <label htmlFor="">Apellido Materno:</label>
                <input type="text" />
                <label htmlFor="">Correo:</label>
                <input type="email" />
                <label htmlFor="">Usuario:</label>
                <input type="text" />
                <label htmlFor="">Contraseña:</label>
                <input type="password" />
                <label htmlFor="">Rol:</label>
                <select name="" id="">
                    {
                        roles.map(rol => {
                            return (
                                <option value={rol.id}>{rol.nombre}</option>
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
}

export default FormAddUser;