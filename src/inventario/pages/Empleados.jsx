import React, { useState } from 'react';
import Modal from "../components/Modal";
import FormAddEmpleado from "../components/FormAddEmpleado";
import { Search } from "../components/Search";
import TableComponent from "../components/Table";
import AddIcon from '@mui/icons-material/Add';
function Empleados(){
    const [showModal,setShowModal]= useState(false);
    const headers=[ 
        'Nombre',
        'Departamento'
    ];
    const initialRows=[
        ['José Darío González Alonso','Recursos Humanos'],
        ['Alitzel Xiadani Romero García', 'Capacitación']

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
                <div className="buttons2 w-full">
                    <button className='btn-agregar float-end'
                        onClick={()=>setShowModal(true)}
                    >
                        <AddIcon />
                        Agregar Empleado
                    </button>
                </div>

                {
                showModal? <Modal body={<FormAddEmpleado />} setShowModal={setShowModal}/> : null
                }
            </div>

        </div>
    );
}

export default Empleados;