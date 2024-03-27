import React from 'react'
import { CommonInputs } from './components/CommonInputs'
import { OsSelect } from './components/OsSelect'
import { DescripcionBox } from './components/DescripcionBox'
import { BotonesSave } from './components/BotonesSave'

export const CelularForm = () => {
    return (
        <>
            <form action="" className='w-full pt-4'>
                <div className="flex">
                    <div className='w-3/4 pl-5'>

                        <CommonInputs />
                    </div>
                    <div className='w-3/5 pl-9'>
                        <div className=''>
                            <OsSelect />
                        </div>
                        <div className='mt-3'>
                            <DescripcionBox />
                        </div>
                    </div>
                </div>
                <BotonesSave/>
            </form>
        </>
    )
}
