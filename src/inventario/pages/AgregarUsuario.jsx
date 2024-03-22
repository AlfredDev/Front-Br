import styled from "styled-components";

function AgregarUsuario() {
    return (
        <div className="fondo-form overflow-auto">
            <div className="flex justify-center">
                <form className="bg-white grid w-2/5 mt-5 p-5">
                    <label>Nombre(s):</label>
                    <input type="text" required />

                    <label>Apellido Paterno: </label>
                    <input type="text" />

                    <label>Apellido Materno:</label>
                    <input type="text" />

                    <label>Usuario:</label>
                    <input type="text" required />

                    <label>Correo:</label>
                    <input type="text" required />


                    <label>Contraseña:</label>
                    <input type="password" required />


                    <label>Confirmar Contraseña:</label>
                    <input type="password" required />

                    <div className="flex justify-center">
                        <button className="btn-agregar mb-2 mt-4 w-full">Agregar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AgregarUsuario;