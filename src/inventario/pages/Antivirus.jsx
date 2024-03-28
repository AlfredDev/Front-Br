import React from 'react';
import Modal from '../components/Modal';
import FormAddCampo from '../components/FormAddCampo';
import TableComponent from '../components/Table';



const generateRandomData = () => {
    const desserts = ['Frozen yoghurt', 'Ice cream sandwich', 'Eclair', 'Cupcake', 'Gingerbread'];
    const randomCalories = () => Math.floor(Math.random() * 500) + 100;
    const randomFat = () => Math.floor(Math.random() * 20) + 1;
    const randomCarbs = () => Math.floor(Math.random() * 100) + 1;
    const randomProtein = () => Math.floor(Math.random() * 20) + 1;

    const rows = [];
    for (let i = 0; i < 20; i++) {
        const dessertIndex = Math.floor(Math.random() * desserts.length);
        rows.push([
            desserts[dessertIndex],
            randomCalories(),
            randomFat(),
            randomCarbs(),
            randomProtein(),
        ]);
    }
    return rows;
};

const headers = [
    'Dessert (100g serving)',
    'Calories',
    'Fat (g)',
    'Carbs (g)',
    'Protein (g)',
];




const initialRows = generateRandomData();

function Antivirus() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className='flex flex-col h-screen p-7' >

            <div className="bg-red-300 h-2/3 ">
                <TableComponent headers={headers} rows={initialRows} />
            </div>

            <button onClick={() => setShowModal(true)} className='btn-agregar mt-5'>Agregar Antivirus</button>
            {
                showModal ? <Modal body={<FormAddCampo header={"Agregar Antivirus"} />} setShowModal={setShowModal} /> : null
            }
        </div>
    )
}

export default Antivirus;
