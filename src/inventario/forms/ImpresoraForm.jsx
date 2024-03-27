import React from 'react'
import { CommonInputs } from './components/CommonInputs'
import { DescripcionBox } from './components/DescripcionBox'
import { BotonesSave } from './components/BotonesSave'

export const ImpresoraForm = () => {
    return (
        <>
            <form action="" className='w-full pt-4'>
                <div className="flex">
                    <div className='w-3/5 pl-5'>

                        <CommonInputs />
                    </div>
                    <div className='w-2/5'>

                        <DescripcionBox />
                    </div>
                </div>
                <BotonesSave />
            </form>
        </>
    )
}
