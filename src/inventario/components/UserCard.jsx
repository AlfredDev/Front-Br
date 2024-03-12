import React from 'react'

export const UserCard = ({ user, correo }) => {
    return (
        <div className='bg-[#1D242E] w-full h-28 flex p-5'>
            <div className="data">
                <h2>{user}</h2>
                <h3>{correo}</h3>
            </div>
        </div>
    )
}
