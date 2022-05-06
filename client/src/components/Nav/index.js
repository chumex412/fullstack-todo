import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavBar>
      <div className="container">
        <NavContent>
          <div className="nav-brand">

          </div>
          <ul>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
            </li>
          </ul>
        </NavContent>
      </div>
    </NavBar>
  )
}

const NavBar = styled.nav`
  background-color: var(--secondary-dark);
`;

const NavContent = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  min-height: 10vh;

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
  }
  
  .nav-link {
    text-decoration: none;
    font-size: calc(1.8rem * var(--base-size));
    line-height: 150%;
    color: var(--off-white);

    &.active {
      color: var(--light-color);
    }
  }
`;

export default Nav;