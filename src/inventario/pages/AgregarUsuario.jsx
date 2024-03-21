import styled from "styled-components";

function AgregarUsuario() {
    return (
        <Container className="flex justify-center h-full">
            <div className="w-11/12 bg-white h-max mt-5 fondo">
                <form>
                    <div className="campo">
                        <label>Nombre(s):</label>
                        <input type="text" required />
                    </div>

                    <div className="campo">
                        <label>Apellido Paterno: </label>
                        <input type="text" />
                    </div>

                    <div className="campo">
                        <label>Apellido Materno:</label>
                        <input type="text" />
                    </div>

                    <div className="campo">
                        <label>Usuario:</label>
                        <input type="text" required />
                    </div>

                    <div className="campo">
                        <label>Correo</label>
                        <input type="text" required />
                    </div>


                    <div className="campo">
                        <label>Contraseña</label>
                        <input type="password" required />
                    </div>


                    <div className="campo">
                        <label>Confirmar Contraseña</label>
                        <input type="password" required />
                    </div>

                    <div className="flex justify-end">
                        <button className="btn-agregar mb-2 mr-2">Agregar</button>
                    </div>
                </form>
            </div>

        </Container>
    );
}

function addUser() {
    console.log("agregar usuario");
}

const Container = styled.div`
    margin-top:4px;
    background:#EDF1F5;
    .fondo{
        padding:1rem;
        border-radius:5px;
        .campo{
            margin:10px;
            display:flex;
            justify-content:center;
            label{
                width:30%;
                text-align:end;
                padding-right:1rem;
            }
            input{
                width:30%;
                padding:2px 4px;
            }
        }
    }
    
`;
export default AgregarUsuario;