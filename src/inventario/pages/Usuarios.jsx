import Button from "../components/ButtonAdd";
import styled from "styled-components";
import Modal from "../components/Modal";
import React from "react";
import { Search } from "../components/Search";
import TableComponent from "../components/Table";
import FormAddUser from "../components/FormAddUser";
import AddIcon from '@mui/icons-material/Add';


function Usuarios(){
    const [showModal,setShowModal]=React.useState(false);
    const headers=[ 
        'Nombre',
        'Correo',
        'Usuario',
        'Rol'
    ];
    const initialRows=[
        ['José Darío González Alonso','dario@gmail.com','dario17','Administrador'],
        ['José Darío González Alonso','dario@gmail.com','dario17','Administrador'],
        

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
                        Agregar Usuario
                    </button>
                </div>

                {
                showModal? <Modal body={<FormAddUser />} setShowModal={setShowModal}/> : null
                }
            </div>

        </div>
    );
}


export default Usuarios;