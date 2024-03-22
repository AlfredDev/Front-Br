
import Modal from "../components/Modal";
import React from "react";
import AddDepartamento from "./AddDepartamento";


function Departamentos() {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <div>
            Departamentos
            <button onClick={() => setShowModal(true)} className="btn-agregar">Agregar Departamento</button>
            {
                showModal ? (<Modal header={"Agregar Departamento"} body={<AddDepartamento />} funcion={setShowModal} setShowModal={setShowModal} />) : null
            }
        </div>
    );
}



export default Departamentos;