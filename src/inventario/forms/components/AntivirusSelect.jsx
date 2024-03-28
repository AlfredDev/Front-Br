
export const AntivirusSelect = () => {
    return (
        <>

            <div className='mt-3'>
                <label htmlFor="antivitus" className="block">Antivirus</label>
                <select id="computadora" className="w-4/5 border border-gray-300 rounded-md py-2 px-3 mt-1">
                    <option value="avast" defaultValue>Avast</option>
                    <option value="panda">Panda</option>
                    <option value="mcfe">McAfee
                    </option>

                </select>
            </div>
        </>
    )
}
