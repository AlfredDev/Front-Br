import React from 'react'

export const CommonInputs = () => {
    return (
        <>
            <div className=''>
                <label htmlFor="folio" className="block">Folio</label>
                <input
                    type="text"
                    id="folio"
                    className="w-4/5 border border-gray-300 rounded-md py-2 px-3 mt-1 text-gray-700 leading-tight  focus:shadow-outline" />
            </div>

            <div className='mt-3'>
                <label htmlFor="marca" className="block">Marca</label>
                <input
                    type="text"
                    id="marca"
                    className="w-4/5 border border-gray-300 rounded-md py-2 px-3 mt-1 text-gray-700 leading-tight  focus:shadow-outline" />
            </div>
            <div className='mt-3'>
                <label htmlFor="modelo" className="block">Modelo</label>
                <input
                    type="text"
                    id="procesador"
                    className="w-4/5 border border-gray-300 rounded-md py-2 px-3 mt-1 text-gray-700 leading-tight  focus:shadow-outline" />
            </div>
            <div className='mt-3'>
                <label htmlFor="pserie" className="block">Serie</label>
                <input
                    type="text"
                    id="serie"
                    className="w-4/5 border border-gray-300 rounded-md py-2 px-3 mt-1 text-gray-700 leading-tight  focus:shadow-outline" />
            </div>

            <div className='mt-3'>
                <label htmlFor="estado" className="block">Estado</label>
                <select id="computadora" className="w-4/5 border border-gray-300 rounded-md py-2 px-3 mt-1">
                    <option value="bueno" defaultValue>Bueno</option>
                    <option value="defectuoso">Defectuoso</option>
                    <option value="mantenimiento">Mantenimiento</option>
                    <option value="obsoleto">Obsoleto</option>
                </select>
            </div>
        </>
    )
}
