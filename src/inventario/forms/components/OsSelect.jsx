import React from 'react'

export const OsSelect = () => {
    return (
        <>

            <div className='mt-3'>
                <label htmlFor="os" className="block">Sistema Operativo</label>
                <select id="computadora" className="w-4/5 border border-gray-300 rounded-md py-2 px-3 mt-1">
                    <option value="w10" defaultValue>Windows 10 Home</option>
                    <option value="w10pro">Windows 10 pro</option>
                    <option value="w11">Windows 11</option>
                    <option value="w8">Windows 8</option>
                    <option value="w7">Windows 7</option>
                </select>
            </div>
        </>
    )
}
