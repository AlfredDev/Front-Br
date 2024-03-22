import React from 'react';
import Modal from '../components/Modal';
import FormAddCampo from '../components/FormAddCampo';
function Office(){
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div>
            <button onClick={()=>setShowModal(true)} className='btn-agregar'>Agregar Office</button>
            {
                showModal? <Modal body={<FormAddCampo header={"Agregar Office"} />} setShowModal={setShowModal}/> : null
            }
        </div>
    )
}

export default Office;