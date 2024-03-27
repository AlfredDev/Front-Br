import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArticleIcon from '@mui/icons-material/Article';
import { Button, Stack } from '@mui/material';
export const BotonesBottom = ({ label, addHandle = {} }) => {


    return (
        <>
            <div className="h-1/6 flex flex-row justify-between content-center pt-4" >
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
                        onClick={addHandle}
                    >
                        <AddIcon />
                        {label}
                    </button>
                </div>
            </div>
        </>
    )
}
