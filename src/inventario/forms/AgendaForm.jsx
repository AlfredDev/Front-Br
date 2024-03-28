import { Search } from "../components/Search"
import { DatePicker } from "./components/DatePicker"

export const AgendaForm = () => {
    return (
        <div className=" className='w-full  pl-2 pr-2">
            <div className="w-full ">
                <h1 className="text-xl text-center font-extrabold dark:text-white">Agendar Mantenimiento</h1>
            </div>

            <div className="w-full flex justify-end mt-4 pr-2">
                <div className="flex  pb-1 pt-1  w-3/5">
                    <Search holder={"Buscar dispositivo"} />
                </div>
            </div>

            <div className="w-full flex items-center pt-2">

                <div className='w-1/2'>
                    <label htmlFor="folio" className="block">Folio</label>
                    <input
                        type="text"
                        id="folio"
                        className="w-[90%] border border-gray-300 rounded-md py-2 px-3 mt-1 text-gray-700 leading-tight  focus:shadow-outline" />
                </div>
                <div className="w-1/2">
                    <label htmlFor="fecha" className="block">Fecha</label>
                    <DatePicker />
                </div>
            </div>

            <div className="w-full pt-4">
                <label htmlFor="problema" className="block">Problema</label>
                <textarea
                    id="problema"
                    rows={3}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 text-gray-700 leading-tight  focus:shadow-outline" />
            </div>
            <div className="w-full pt-4">
                <label htmlFor="problema" className="block">Usuario Responsable</label>
                <select id="user" className=" w-full border border-gray-300 rounded-md py-2 px-3 mt-1">
                    <option value="avast" defaultValue>Sin asignar</option>
                    <option value="panda">Jose</option>
                    <option value="mcfe">juan
                    </option>

                </select>
            </div>
            <div className="flex justify-end mt-4 mb-4">
                <button className="btn-agregar mt-2 w-2/5 " >Agendar</button>

            </div>
        </div>
    )
}
