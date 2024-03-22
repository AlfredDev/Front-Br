import React from 'react';
import Modal from '../components/Modal';
import FormAddCampo from '../components/FormAddCampo';
function Antivirus(){
    const [showModal, setShowModal] = React.useState(false);
    return(
        <div>
            Antivirus
            <button onClick={()=> setShowModal(true)} className='btn-agregar'>Agregar Antivirus</button>
            {
                showModal? <Modal body={<FormAddCampo header={"Agregar Antivirus"} />} setShowModal={setShowModal}/> : null
            }
        </div>
    )
}

export default Antivirus;
