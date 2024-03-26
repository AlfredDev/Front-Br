import React from 'react'

export const OfficeSelect = () => {
    return (
        <>
            <div className='mt-3'>
                <label htmlFor="office" className="block">Office</label>
                <select id="oficce" className="w-4/5 border border-gray-300 rounded-md py-2 px-3 mt-1">
                    <option value="ltsc" defaultValue>Office 2022 LTSC</option>
                    <option value="lite">Office Lite</option>
                </select>
            </div>
        </>
    )
}
