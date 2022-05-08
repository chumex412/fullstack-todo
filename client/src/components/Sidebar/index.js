import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { getUser } from '../../_selectors/userSelector'

const Sidebar = ({user}) => {
  return (
    <Aside>
      <div>
        <ProfileContainer>
          <div className="img-container"></div>
          <p>Hello {user.name}</p>
        </ProfileContainer>
        <SidebarLinksContainer>
          <ul className="nav_side-list">
            <li className="nav_side-item">
              <NavLink to="/" className="nav_side-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M11 20H6q-.4 0-.7-.3-.3-.3-.3-.7v-7H3.3q-.3 0-.5-.3-.1-.3.2-.6l8.3-7.5q.3-.3.7-.3.4 0 .7.3l3.3 3V5q0-.4.3-.7.3-.3.7-.3h1q.4 0 .7.3.3.3.3.7v4.3l2 1.8q.3.3.2.6-.1.3-.5.3H19v7q0 .4-.3.7-.3.3-.7.3h-5v-6h-2Zm-4-2h2v-5q0-.4.3-.7.3-.3.7-.3h4q.4 0 .7.3.3.3.3.7v5h2v-7.8l-5-4.5-5 4.5Zm3-8h4q0-.8-.6-1.3T12 8.2q-.8 0-1.4.5-.6.5-.6 1.3Zm0 2h4-4Z"/>
                </svg>
                <span>Home</span>
              </NavLink>
            </li>
            <li className="nav_side-item">
              <NavLink to="/dashboard" className="nav_side-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M13 8V4q0-.4.3-.7.3-.3.7-.3h6q.4 0 .7.3.3.3.3.7v4q0 .4-.3.7-.3.3-.7.3h-6q-.4 0-.7-.3-.3-.3-.3-.7ZM3 12V4q0-.4.3-.7.3-.3.7-.3h6q.4 0 .7.3.3.3.3.7v8q0 .4-.3.7-.3.3-.7.3H4q-.4 0-.7-.3-.3-.3-.3-.7Zm10 8v-8q0-.4.3-.7.3-.3.7-.3h6q.4 0 .7.3.3.3.3.7v8q0 .4-.3.7-.3.3-.7.3h-6q-.4 0-.7-.3-.3-.3-.3-.7ZM3 20v-4q0-.4.3-.7.3-.3.7-.3h6q.4 0 .7.3.3.3.3.7v4q0 .4-.3.7-.3.3-.7.3H4q-.4 0-.7-.3-.3-.3-.3-.7Zm2-9h4V5H5Zm10 8h4v-6h-4Zm0-12h4V5h-4ZM5 19h4v-2H5Zm4-8Zm6-4Zm0 6Zm-6 4Z"/>
                </svg>
                <span>Dashboard</span>
              </NavLink>
            </li>
          </ul>
          <div className="btn-container">
            <button className="signout-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M15.3 16.3q-.3-.4-.3-.8t.3-.7l1.9-1.8H10q-.4 0-.7-.3-.3-.3-.3-.7 0-.4.3-.7.3-.3.7-.3h7.2l-1.9-1.8q-.3-.3-.3-.8 0-.4.3-.7.3-.3.7-.3.4 0 .7.3l3.6 3.6.2.3v.8q0 .2-.2.3l-3.6 3.6q-.3.3-.7.3-.4 0-.7-.3ZM5 21q-.8 0-1.4-.6Q3 19.8 3 19V5q0-.8.6-1.4Q4.2 3 5 3h6q.4 0 .7.3.3.3.3.7 0 .4-.3.7-.3.3-.7.3H5v14h6q.4 0 .7.3.3.3.3.7 0 .4-.3.7-.3.3-.7.3Z"/>
              </svg>
              <span>Signout</span>
            </button>
          </div>
        </SidebarLinksContainer>
      </div>
    </Aside>
  )
}

const Aside = styled.aside`
  & > div {
    background-color: var(--secondary-dark);
    position: fixed;
    top: 0;
    left: 0;
    width: 350px;
    height: 100%;
    padding: 5rem 2rem;
    display: grid;
    grid-template-rows: auto 1fr;
  }
`;

const ProfileContainer = styled.section`
  .img-container {
    background-image: url(../../assets/profile-image.jpg);
    background-repeat: no-repeat;
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    margin: 0 auto;
  }

  p {
    font-size: calc(2rem * var(--base-size));
    font-weight: 600;
    line-height: 150%;
    color: var(--accent-color);
    padding: 1.5rem;
    text-transform: capitalize;
  }
`;

const SidebarLinksContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr auto;

  .btn-container {
    button {
      display: inline-flex;
      align-items: center;
      gap: 2rem;
      border: none;
      background-color: transparent;
      color: var(--accent-color);
    }
  }

  svg {
    fill: var(--accent-color);
  }

  .nav_side-item {
  }

  .nav_side-link {
    font-size: calc(1.8rem * var(--base-size));
    line-height: 150%;
    color: var(--accent-color);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem;

    &.active {
      color: #888217;

      svg {
        fill: #888217;
      }
    }
  }
`;

const mapStateToProps = state => {
  return {
    user: getUser(state)
  }
}

export default connect(mapStateToProps)(Sidebar);