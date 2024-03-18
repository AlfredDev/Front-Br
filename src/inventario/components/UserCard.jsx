import React from 'react'
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";

export const UserCard = ({ user, correo, sideBar }) => {
    return (
        Card
        <div className='card bg-[#1D242E] w-full flex p-5'>
            <FaRegUserCircle className='logo'/>
            {sideBar &&  <div className="data">
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
