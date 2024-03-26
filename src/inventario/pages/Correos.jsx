import { Search } from "../components/Search";
import AddIcon from '@mui/icons-material/Add';
import TableComponent from "../components/Table";
import React from "react";
import FormAddCorreo from "../components/FormAddCorreo";
import Modal from "../components/Modal";
function Correos() {
    const headers = ['Empleado', 'Correo', 'Contraseña', 'Categoría del puesto', 'Puesto', 'Estado'];
    const [showModal, setShowModal] = React.useState(false);
    const initialRows = [
        [
            'Jose Dario',
            'dario@gmail.com',
            'password',
            'Aministrador',
            'Administrador',
            'Activo'
        ],
        [
            'Jose Dario',
            'dario@gmail.com',
            'password',
            'Aministrador',
            'Administrador',
            'Activo'
        ],
        [
            'Jose Dario',
            'dario@gmail.com',
            'password',
            'Aministrador',
            'Administrador',
            'Activo'
        ],

    ];
    return (
        <div className='flex flex-col h-screen p-7' >
            <div className="flex  pb-4 pt-3 justify-end ">
                <Search holder={"PC"} />
            </div>
            <div className="bg-red-300 h-2/3 ">
                <TableComponent headers={headers} rows={initialRows} />
            </div>
            <div className="text-right pt-1">
                <span>{initialRows.length} registros</span>
            </div>

            <div className="h-1/6 flex flex-row justify-between content-center pt-5" >
                <div className="buttons2 w-full ">
                    <button className='btn-agregar w-[300px] h-10 text-white rounded-md  transition-colors duration-300 float-end'
                        onClick={() => setShowModal(true)}>
                        <AddIcon />
                        Agregar Correo
                    </button>
                </div>
            </div>
            {
                showModal? <Modal body={<FormAddCorreo header={"Agregar Correo"} />} setShowModal={setShowModal}/> : null
            }

        </div>
    )
}

export default Correos;