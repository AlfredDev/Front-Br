import React from 'react'
import { CommonInputs } from './components/CommonInputs'
import { OfficeSelect } from './components/OfficeSelect'
import { OsSelect } from './components/OsSelect'
import { AntivirusSelect } from './components/AntivirusSelect'
import { DescripcionBox } from './components/DescripcionBox'
import { Button, Stack } from '@mui/material';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { BotonesSave } from './components/BotonesSave'
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
                    <div className='w-1/4 pl-10'>
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
              <BotonesSave/>
            </form>
        </>
    )
}
