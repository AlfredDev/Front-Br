import React from "react";
import Modal from "../components/Modal";
import FormAddSO from "../components/FormAddCampo";
function SistemasOperativos() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div>Sistemas Operativos
            <button onClick={()=>setShowModal(true)} className="btn-agregar">Agregar SO</button>
            {
                showModal ? <Modal body={<FormAddSO header={"Agregar Sistema Operativo"} />} setShowModal={setShowModal}/> : null
            }
        </div>

    );
}

export default SistemasOperativos;