import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";
function ButtonAdd({ label, ruta }) {
    return (
        <Button>
            <Link to={ruta} className="link">
                <FaPlus/>
                <span className="px-2">{label}</span>
            </Link>
        </Button>

    );
}

const Button=styled.div`
    background:#DF8304;
    color:white;
    border-radius:3px;

    :hover{

    }

    .link{
        display:flex;
        align-items:center;
        padding:10px 5px;
    }
`;

export default ButtonAdd;


