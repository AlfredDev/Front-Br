import React from 'react'
import { CommonInputs } from './components/CommonInputs'
import { OfficeSelect } from './components/OfficeSelect'
import { OsSelect } from './components/OsSelect'
import { AntivirusSelect } from './components/AntivirusSelect'
import { DescripcionBox } from './components/DescripcionBox'
import { Button, Stack } from '@mui/material';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
export const ComputadoraForm = () => {
    return (
        <>
            <form action="" className='w-full pt-4'>

                <div className="flex">
                    <div className='w-1/4 pl-5'>

                        <CommonInputs />
                    </div>


                    <div className='w-1/4'>
                        <div className=''>
                            <label htmlFor="tipo" className="block">Tipo</label>
                            <select id="tipo" className="w-4/5 border border-gray-300 rounded-md py-2 px-3 mt-1">
                                <option value="escritorio" defaultValue>Escritorio</option>
                                <option value="laptop">Laptop</option>
                            </select>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="ram" className="block">Memoria RAM (GB)</label>
                            <input
                                type="text"
                                id="pserie"
                                className="w-4/5 border border-gray-300 rounded-md py-2 px-3 mt-1 text-gray-700 leading-tight  focus:shadow-outline" />
                        </div>
                        <OfficeSelect />
                        <OsSelect />
                        <AntivirusSelect />
                    </div>


                    <div className=' w-1/4 '>
                        <div className=''>
                            <label htmlFor="pserie" className="block">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                className="w-4/5 border border-gray-300 rounded-md py-2 px-3 mt-1 text-gray-700 leading-tight  focus:shadow-outline" />
                        </div>


                        <div className='mt-3'>
                            <label htmlFor="pserie" className="block">Procesador</label>
                            <input
                                type="text"
                                id="procesador"
                                className="w-4/5 border border-gray-300 rounded-md py-2 px-3 mt-1 text-gray-700 leading-tight  focus:shadow-outline" />
                        </div>

                        <div className='mt-3'>
                            <label htmlFor="pserie" className="block">Procesador Serie</label>
                            <input
                                type="text"
                                id="procesadorserie"
                                className="w-4/5 border border-gray-300 rounded-md py-2 px-3 mt-1 text-gray-700 leading-tight  focus:shadow-outline" />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="pserie" className="block">Procesador Modelo</label>
                            <input
                                type="text"
                                id="procesadoresmodelo"
                                className="w-4/5 border border-gray-300 rounded-md py-2 px-3 mt-1 text-gray-700 leading-tight  focus:shadow-outline" />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="pserie" className="block">Capacidad de disco (GB)</label>
                            <input
                                type="text"
                                id="procesadoresmodelo"
                                className="w-4/5 border border-gray-300 rounded-md py-2 px-3 mt-1 text-gray-700 leading-tight  focus:shadow-outline" />
                        </div>

                    </div>
                    <div className='w-1/4'>
                        <div className=''>
                            <label htmlFor="pserie" className="block">Empleado Responsable</label>
                            <input
                                type="text"
                                id="empleado"
                                className=" border border-gray-300 rounded-md py-2 px-3 mt-1 text-gray-700 leading-tight  focus:shadow-outline" />
                        </div>
                        <DescripcionBox />
                    </div>
                </div>
                <div className="pl-5 flex justify-between items-center p-4 mt-1">
                    <div>
                        <Stack direction={'row'} spacing={2}>
                            <Button variant="outlined" endIcon={<DriveFolderUploadIcon />} size='large' style={{ borderColor: 'orange', color: 'black' }} color='primary'>
                                Exportar a PDF
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
            </form>
        </>
    )
}
