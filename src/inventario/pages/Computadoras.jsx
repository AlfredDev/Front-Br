import React from 'react'
import { Search } from '../components/Search'
import TableComponent from '../components/Table';
import { Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';

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

export const Computadoras = () => {

    let navigate = useNavigate();

    const onAddHandler = () => {
        navigate('/computadora')
    }


    return (
        <div className='flex flex-col h-screen p-7' >
            <div className="flex  pb-4 pt-3 justify-end ">
                <Search holder={"PC"} />
            </div>
            <div className="bg-red-300 h-2/3 ">
                <TableComponent headers={headers} rows={initialRows} />
            </div>
            <div className="text-right pt-1">
                <span>100 reg</span>
            </div>

            <div className="h-1/6 flex flex-row justify-between content-center pt-8" >
                <div className="buttons1">
                    <Stack direction={'row'} spacing={2}>
                        <Button variant="outlined" endIcon={<PictureAsPdfIcon />} style={{ borderColor: 'orange', color: 'black' }} color='primary'>
                            Exportar a PDF
                        </Button>
                        <Button variant="outlined" endIcon={<ArticleIcon />} style={{ borderColor: 'orange', color: 'black' }}>
                            Exportar a Excel
                        </Button>
                    </Stack>
                </div>
                <div className="buttons2">
                    <button className='bg-orange-brisa w-[300px] h-10 text-white rounded-md hover:bg-orange-400 transition-colors duration-300'
                        onClick={onAddHandler}
                    >
                        <AddIcon />
                        Agregar Computadora
                    </button>
                </div>
            </div>

        </div>
    )
}
