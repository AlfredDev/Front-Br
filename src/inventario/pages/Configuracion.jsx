import { HiOutlineUsers, HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineContactMail } from "react-icons/md";
import { FaWindows } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { SiMicrosoftoffice } from "react-icons/si";
import { IoBookmarks } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa6";


function Configuracion() {

    const opciones = [
        {
            label: "Usuarios",
            icon: <HiOutlineUsers />,
            to: "/configuracion/usuarios",
        },
        {
            label: "Empleados",
            icon: <MdOutlineContactMail />,
            to: "/configuracion/empleados",
        },
        {
            label: "Departamentos",
            icon: <HiOutlineBuildingOffice2 />,
            to: "/configuracion/departamentos",
        },
        {
            label: "Sistemas Operativos",
            icon: <FaWindows />,
            to: "/configuracion/usuarios",
        },
        {
            label: "Antivirus",
            icon: <AiFillSafetyCertificate />,
            to: "/configuracion/usuarios",
        },
        {
            label: "Office",
            icon: <SiMicrosoftoffice />,
            to: "/configuracion/usuarios",
        },
        {
            label: "Marcas",
            icon: <IoBookmarks />,
            to: "/configuracion/usuarios",
        },
    ];
    return (
        <Container className="h-full">
            <div className="opciones">
                {opciones.map(({ icon, label, to }) => (
                    <div className="item w-full" key={label}>
                        <NavLink className="link w-full" to={to}>
                            <div className="linkicon p-2">{icon}</div>
                            <span className="w-full">{label}</span>
                            <FaChevronRight className="icon-right"/>
                        </NavLink>
                        <hr />
                    </div>
                ))}
            </div>
        </Container>
    );
}

const Container = styled.div`
    background: #EDF1F5;
    margin-top:4px;
    height:full;
    display: flex;
    justify-content:center;
    .opciones{
        display:inline-block;
        width:90%;
        margin-top:5%;
        height:min-content;
        background:white;
        border-radius:10px;
        .item{

            :hover{
                background: #DF8304
            }
            .link{
                display:flex;
                align-items:center;
                padding:5px;
                .linkicon{
                   font-size:25px;
                }
                .icon-right{
                    margin-right:5px;
                }
            }
        }
    }
`;


export default Configuracion;