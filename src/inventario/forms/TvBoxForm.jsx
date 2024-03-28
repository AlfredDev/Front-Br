import { CommonInputs } from './components/CommonInputs'
import { DescripcionBox } from './components/DescripcionBox'
import { BotonesSave } from './components/BotonesSave'

export const TvBoxForm = () => {
    return (
        <>
            <form action="" className='w-full pt-5 pl-2'>
                <div className="flex">
                    <div className='w-3/5 pl-5'>
                        <CommonInputs />
                    </div>
                    <div className='w-3/6 pl-8'>
                        <DescripcionBox />
                    </div>
                </div>
                <BotonesSave />
            </form>
        </>
    )
}
