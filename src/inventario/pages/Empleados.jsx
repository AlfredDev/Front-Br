import Button from "../components/ButtonAdd";
function Empleados(){
    return (
        <>
           <Button label={"Agregar Empleado"} className="w-auto" ruta={"/configuracion/empleados/agregarEmpleado"}/>
        </>
    );
}

export default Empleados;