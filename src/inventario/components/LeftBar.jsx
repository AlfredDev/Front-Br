import React from "react";
import { UserCard } from "./UserCard";
import {
  PiScreencastBold,
  PiHouseBold,
  PiCaretLeftBold,
  PiLaptopBold,
  PiPrinterBold,
  PiPhoneCallBold,
  PiDeviceTabletBold,
} from "react-icons/pi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineContactMail } from "react-icons/md";
import { BsPhone, BsCreditCard2Front } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { RiSettings5Line } from "react-icons/ri";
import { CgLogOut } from "react-icons/cg";
const linksArray = [
  {
    label: "Inicio",
    icon: <PiHouseBold />,
    to: "/",
  },
  {
    label: "Celulares",
    icon: <BsPhone />,
    to: "/celulares",
  },
  {
    label: "Computadoras",
    icon: <PiLaptopBold />,
    to: "/computadoras",
  },
  {
    label: "Ipads",
    icon: <PiDeviceTabletBold />,
    to: "/",
  },
  {
    label: "Impresoras",
    icon: <PiPrinterBold />,
    to: "/",
  },
  {
    label: "MicroImpresoras",
    icon: <PiPrinterBold />,
    to: "/",
  },
  {
    label: "Pantallas",
    icon: <SlScreenDesktop />,
    to: "/",
  },
  {
    label: "Radios",
    icon: <PiHouseBold />,
    to: "/",
  },
  {
    label: "Teléfonos",
    icon: <PiPhoneCallBold />,
    to: "/",
  },
  {
    label: "TvBox",
    icon: <PiScreencastBold />,
    to: "/",
  },
  {
    label: "TvHuésped",
    icon: <SlScreenDesktop />,
    to: "/",
  },
  {
    label: "Correos",
    icon: <MdOutlineContactMail />,
    to: "/correos",
  },
  {
    label: "Llaves",
    icon: <BsCreditCard2Front />,
    to: "/",
  },
];

const listBottom = [
  {
    label: "Configuración",
    icon: <RiSettings5Line />,
    to: "/configuracion",
  },
  {
    label: "Cerrar Sesión",
    icon: <CgLogOut />,
    to: "/",
  },
];

function LeftBar({ sidebarOpen, setSidebarOpen }) {
  const ModSidebaropen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Container isOpen={sidebarOpen} className="">
      <div className="sidebar bg-bg-nav h-screen relative">
        <UserCard
          user={"Alfred"}
          correo={"meryyein@gmail.com"}
          className="h-28"
          sideBar={sidebarOpen}
        />
        <button className="Sidebarbutton bg-bg-nav" onClick={ModSidebaropen}>
          <PiCaretLeftBold />
        </button>
          <div className="contenedorItems">
            {linksArray.map(({ icon, label, to }) => (
              <div className="linkContainer" key={label} title={label}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `links${isActive ? ` active` : ``}`
                  }
                >
                  <div className="linkicon p-2">{icon}</div>
                  {sidebarOpen && <span className="text-white">{label}</span>}
                </NavLink>
              </div>
            ))}
            <Divider />
            {listBottom.map(({ icon, label, to }) => (
              <div className="linkContainer" key={label} title={label}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `links${isActive ? ` active` : ``}`
                  }
                >
                  <div className="linkicon p-2">{icon}</div>
                  {sidebarOpen && <span className="text-white">{label}</span>}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      
    </Container>
  );
}

const Container = styled.div`
  color: white;
  .Sidebarbutton {
    position: absolute;
    right: -20px;
    bottom: 20px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 1s;
    transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
    border: none;
    letter-spacing: inherit;
    color: white;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
    font-family: inherit;
    outline: none;
  }

  .contenedorItems {
    max-height: calc(100% - 90px); 
    overflow: auto;
  }

  .linkContainer {
    color: #df8304;
    margin: 8px 0;
    :hover {
      background: #df8304;
      color: white;
    }
    .links {
      display: flex;
      align-items: center;
      text-decoration: none;
      height: 50px;
      .linkicon {
        display: flex;
        svg {
          font-size: 25px;
        }
      }
      &.active {
        color: white;
        background: #df8304;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

      }
    }
  }
`;

const Divider = styled.div`
  height: 2px;
  width: auto;
  background: #df8304;
  margin: 2px;
`;

export default LeftBar;
