import Button from "../components/ButtonAdd";
import styled from "styled-components";
function Usuarios(){
    return(
        <Container>
        <Button label={"Agregar Usuario"} className="w-auto" ruta={"/configuracion/usuarios/agregarUsuario"}/>
        </Container>
    );
}


const Container=styled.div`
    display: flex;
    :hover{
        background-color:#BA6D03;   
    }
`;


export default Usuarios;