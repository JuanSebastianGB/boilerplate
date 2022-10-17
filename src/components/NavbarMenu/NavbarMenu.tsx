import React from 'react';
import { Link } from 'react-router-dom';
export interface NavbarMenuInterface {}

const NavbarMenu: React.FC<NavbarMenuInterface> = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default NavbarMenu;
