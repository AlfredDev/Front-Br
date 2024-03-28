import { CommonInputs } from './components/CommonInputs'
import { DescripcionBox } from './components/DescripcionBox'
import { BotonesSave } from './components/BotonesSave'

export const TelefonoForm = () => {
    return (
        <>
            <form action="" className='w-full pt-5 pl-2'>
                <div className="flex">
                    <div className='w-3/5 pl-5'>
                        <CommonInputs />
                    </div>
                    <div className='w-3/6 pl-1'>
                        <div className=''>
                            <label htmlFor="tipo" className="block">Tipo</label>
                            <input
                                type="text"
                                id="tipo"
                                className="w-[90%] border border-gray-300 rounded-md py-2 px-3 mt-1 text-gray-700 leading-tight  focus:shadow-outline" />
                        </div>
                        <DescripcionBox />
                    </div>
                </div>
                <BotonesSave />
            </form>
        </>
    )
}
