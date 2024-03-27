import { Search } from "../components/Search"

import EventIcon from '@mui/icons-material/Event';
import TableHeading from "../components/TableHeading";
export const Home = () => {



  return (
    <div className='flex flex-col h-screen p-7 overflow-scroll' >
      <div className="flex  pb-1 pt-1 justify-end ">
        <Search holder={"Buscar Por Folio"} />
      </div>
      <div className="flex  pb-3 pt-3 justify-end ">
        <button className='btn-agregar w-[250px] h-10 text-white rounded-md  transition-colors duration-300 float-end'
        >
          <EventIcon />

          Agendar
        </button>
      </div>
      <div className="bg-red-300 h-[40%] ">
        <TableHeading
          title="Ejemplo de Tabla"
          headers={['Fecha', 'Folio', 'Estado', 'Usuario Responsable', 'Problema']}
          rows={[
            ['John Doe', 30, 'johndoe@example.com'],
            ['Jane Smith', 25, 'janesmith@example.com'],
            ['Mike Johnson', 35, 'mikejohnson@example.com'],
            ['Mike Johnson', 35, 'mikejohnson@example.com'],
            ['Mike Johnson', 35, 'mikejohnson@example.com'],

          ]}
          onEdit={(index) => console.log('Editar en índice:', index)}
        />
      </div>
      <div className="bg-red-300 h-[30%] mt-5  mb-9">
        <TableHeading
          title="Ejemplo de Tabla"
          headers={['Fecha', 'Folio', 'Estado', 'Usuario Responsable', 'Problema']}
          rows={[
            ['John Doe', 30, 'johndoe@example.com'],
            ['Jane Smith', 25, 'janesmith@example.com'],
            ['Mike Johnson', 35, 'mikejohnson@example.com'],
          ]}
          onEdit={(index) => console.log('Editar en índice:', index)}
        />
      </div>
    </div>
  )
}
