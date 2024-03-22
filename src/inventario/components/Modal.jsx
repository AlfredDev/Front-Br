function Modal({body, setShowModal }) {
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative my-6 mx-auto w-4/12">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex justify-end">
                            <button
                                className="bg-transparent text-black float-right text-2xl leading-none font-semibold outline-none focus:outline-none mr-2 mt-1"
                                onClick={() => setShowModal(false)}>X</button>
                        </div>
                        <div className="relative flex-auto mb-2 pr-2 pl-2">
                            {body}
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}



export default Modal;