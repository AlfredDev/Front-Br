import React from 'react'

export const DescripcionBox = () => {
    return (
        <>
            <div className='mt-3'>
                <label htmlFor="descripcion" className="block">Descripción</label>
                <textarea
                    type="text"
                    id="descripcion"
                    rows={8}
                    cols={22}
                    className=" border border-gray-300 rounded-md py-2 px-3 mt-1 text-gray-700 leading-tight  focus:shadow-outline" />
            </div>
        </>
    )
}
