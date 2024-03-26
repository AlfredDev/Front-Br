import React from 'react';

export const ModalXl = ({ setShowmodal, body, title }) => {
    return (
        <div className="justify-center items-center flex overflow-x-s fixed inset-0 z-10 outline-none focus:outline-none mt-6">
            <div className='bg-white w-5/6 h-[92%] justify-center focus:outline-none shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] p-5 rounded-md overflow-y-scroll'>
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-semibold text-center pl-10">{title}</h1>
                    <button
                        className="bg-transparent text-black text-xl hover:text-red-500 leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowmodal(false)}>X</button>
                </div>
                <div className='mt-1'>
                    {body}
                </div>
            </div>
        </div>
    );
};
