import React from 'react'
import { CommonInputs } from './components/CommonInputs'
import { BotonesSave } from './components/BotonesSave'
import { DescripcionBox } from './components/DescripcionBox'

export const IpadForm = () => {
    return (
        <>
            <form action="" className='w-full pt-4'>
                <div className="flex">
                    <div className='w-3/4 pl-5'>

                        <CommonInputs />
                    </div>
                    <div className='w-3/4 pl-5'>
                        <div className=''>
                            <label htmlFor="capacidad" className="block">Almacenamiento (GB)</label>
                            <input
                                type="text"
                                id="capacidad"
                                className="w-4/5 border border-gray-300 rounded-md py-2 px-3 mt-1 text-gray-700 leading-tight  focus:shadow-outline" />
                        </div>
                        <div className=''>
                            <label htmlFor="ram" className="block">Memoria RAM (GB)</label>
                            <input
                                type="number"
                                id="capacidad"
                                className="w-4/5 border border-gray-300 rounded-md py-2 px-3 mt-1 text-gray-700 leading-tight  focus:shadow-outline" />
                        </div>
                        <DescripcionBox />
                    </div>
                </div>
                <BotonesSave />
            </form>
        </>
    )
}
