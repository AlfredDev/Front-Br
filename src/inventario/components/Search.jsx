import React from 'react'

export const Search = ({ holder }) => {
    return (
        <form className="w-[500PX] relative">
            <div className="relative shadow-[0_1px_6px_rgba(255,_102,_0,_0.7)] rounded-md">
                <input type="search" placeholder={holder} className=' w-full p-4 focus:outline-none focus:bg-white focus:text-gray-900    rounded-md bg-[#F5F5F5]' />
                <button className='absolute right-0 p-4 '>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                        className="w-6 h-6 text-[#FF6600]
                    ">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </div>
        </form>
    )
}
