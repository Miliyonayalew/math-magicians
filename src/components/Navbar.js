import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assests/app-logo.png';

const Navbar = () => {
  const links = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Calculator',
      path: '/calculator',
    },
    {
      name: 'Quote',
      path: '/quote',
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
        <h1>Math Magicians</h1>
      </div>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <NavLink to={link.path} activeClassName="active" exact>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
