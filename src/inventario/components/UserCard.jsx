import React from 'react'
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";

export const UserCard = ({ user, correo, sideBar }) => {
    return (
        <div className='card bg-[#1D242E] w-full flex p-5 align-items-center'>
            <FaRegUserCircle className='logoUser'/>
            {sideBar &&  <div className="data pl-3">
                <h2>{user}</h2>
                <h3>{correo}</h3>
            </div>}
        </div>
    )
}

const Divider = styled.div`
  height: 2px;
  width: auto;
  background: #df8304;
  margin: 2px;
`;
