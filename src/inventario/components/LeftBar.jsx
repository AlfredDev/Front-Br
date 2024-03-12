import React from 'react'
import { UserCard } from './UserCard'

export const LeftBar = () => {
    return (
        <div className='bg-bg-nav h-screen  w-64 relative'>
            <UserCard user={"Alfred"} correo={"df<f"} />
        </div>
    )
}
