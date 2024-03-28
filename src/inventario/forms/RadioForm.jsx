import { CommonInputs } from './components/CommonInputs'
import { DescripcionBox } from './components/DescripcionBox'
import { BotonesSave } from './components/BotonesSave'

export const RadioForm = () => {
    return (
        <>
            <form action="" className='w-full pt-5 pl-2'>
                <div className="flex">
                    <div className='w-3/5 pl-5'>
                        <CommonInputs />
                    </div>
                    <div className='w-3/6 pl-1'>

                        <div className=''>
                            <label htmlFor="antena" className="block">Antena</label>
                            <input
                                type="text"
                                id="antena"
                                className="w-[90%] border border-gray-300 rounded-md py-2 px-3 mt-1 text-gray-700 leading-tight  focus:shadow-outline" />
                        </div>

                        <div className='mt-3'>
                            <label htmlFor="pila" className="block">Pila</label>
                            <input
                                type="text"
                                id="pila"
                                className="w-[90%] border border-gray-300 rounded-md py-2 px-3 mt-1 text-gray-700 leading-tight  focus:shadow-outline" />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="carcasa" className="block">Carcasa</label>
                            <input
                                type="text"
                                id="carcasa"
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
