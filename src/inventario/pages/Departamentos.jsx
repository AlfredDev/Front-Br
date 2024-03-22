
import Modal from "../components/Modal";
import React from "react";
import FormAddCampo from "../components/FormAddCampo";


function Departamentos() {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <div>
            Departamentos
            <button onClick={() => setShowModal(true)} className="btn-agregar">Agregar Departamento</button>
            {
                showModal ? <Modal body={<FormAddCampo header={"Agregar Departamento"} />} setShowModal={setShowModal}/> : null

            }
        </div>
    );
}



export default Departamentos;