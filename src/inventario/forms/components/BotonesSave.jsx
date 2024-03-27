import { Button, Stack } from '@mui/material'
import React from 'react'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

export const BotonesSave = () => {
    return (
        <>
            <div className="pl-5 flex justify-between items-center p-4 mt-1">
                <div>
                    <Stack direction={'row'} spacing={2}>
                        <Button variant="outlined" endIcon={<DriveFolderUploadIcon />} size='large' style={{ borderColor: 'orange', color: 'black' }} color='primary'>
                            Documento
                        </Button>
                        <span className='text-center'>No se selecc...</span>
                    </Stack>
                </div>
                <button
                    type="button"
                    className="inline-block rounded w-4/12 h-[39px] bg-orange-brisa px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                    Registrar
                </button>
            </div>
        </>
    )
}
