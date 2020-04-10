import React from 'react';
import NavLink from '../libs/NavLink';

const NavBar = () => {
  return (
    <div className="bg-gray-500 py-4 text-center">
      <NavLink href="/sobre">
        Sobre
      </NavLink>
      <NavLink href="/cadastro">
        Cadastro
      </NavLink>
      <NavLink href="/api/login">
        Entra
      </NavLink>
    </div>
  )
}

export default NavBar
