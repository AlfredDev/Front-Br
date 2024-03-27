import React, { useState } from 'react'
import { Search } from '../components/Search';
import TableComponent from '../components/Table';
import { BotonesBottom } from '../components/BotonesBottom';
import Modal from '../components/Modal';
import { TvHuespedForm } from '../forms/TvHuespedForm';


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


export const TvHuesped = () => {
    const [showModal, setShowModal] = useState(false);
    const onOpenhandled = () => {
        setShowModal(true);
    }
    return (
        <div className='flex flex-col h-screen p-7' >
            <div className="flex  pb-4 pt-3 justify-end ">
                <Search holder={"TvHuesped"} />
            </div>
            <div className="bg-red-300 h-2/3 ">
                <TableComponent headers={headers} rows={initialRows} />
            </div>
            <div className="text-right pt-1">
                <span>{initialRows.length}</span>
            </div>

            <BotonesBottom label={'Agregar TvHuesped'} addHandle={onOpenhandled} />
            {
                showModal
                    ? <Modal setShowModal={setShowModal} body={<TvHuespedForm />} />
                    : null
            }
        </div>
    )
}
