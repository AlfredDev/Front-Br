import React, { useState } from 'react'
import { CommonInputs } from './components/CommonInputs'
import { DescripcionBox } from './components/DescripcionBox'
import { BotonesSave } from './components/BotonesSave'

export const MicroImpresoraForm = () => {


    return (
        <>
            <form action="" className='w-full pt-4 pr-2'>
                <div className="flex justify-center ">
                    <div className='w-3/4 pl-5'>

                        <CommonInputs />

                    </div>
                    <DescripcionBox />

                </div>
                <BotonesSave />
            </form>
        </>
    )
}
