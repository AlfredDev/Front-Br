
export const Header = () => {
    return (
        <header className="bg-white flex  items-center justify-end p-1 w-screen h-auto shadow-[0_1px_6px_rgba(255,_102,_0,_0.7)]" >
            <div className="title w-full  flex justify-center">
            <h1 className='text-2xl text-[#060606] font-bold '>
                Inicio
            </h1>
            </div>
            <div className="logo">
                <img src="/src/assets/hux.svg" alt="" className="object-cover w-60 h-1/3" />
            </div>
        </header>
    )
}
