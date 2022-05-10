import React from 'react'
import styled from 'styled-components'
import useGlobalContext from '../../custom/Context';

import Users from '../Users/index';
import TaskModal from '../Tasks/TaskModal';

const AdminDashboard = () => {
  const { users, user, show, close, toggleSidebar, showSidebar } = useGlobalContext();

  const hamburger = (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 22 15">
      <path
       className="a"
       stroke="#f8fafb"
       transform={`${showSidebar ? "rotate(45 -.8 2.9)" : "translate(1 1)"}`} d={`M0 ${showSidebar ? "0L6.6" : "0L7"} 0`}
      />
      <path
       className="a" 
       stroke="#f8fafb"
       transform={`${showSidebar ? "rotate(-45 19.4 6)" : "translate(1 8)"}`} d={`M0 ${showSidebar ? "0L19.9" : "0L20"} 0`}
      />
      <path
       className="a" 
        stroke="#f8fafb"
       transform={`${showSidebar ? "rotate(45 -4.1 11)" : "translate(1 14)"}`} d="M0 0L13 0"
      />
    </svg>
  )
  

  return (
    <DashBoardSection>
      <header>
        <button className="sidebar-toggler" onClick={toggleSidebar}>
          {hamburger}
        </button>
        <h3>Admin Hangout</h3>
      </header>
      { !users.length ? (
          <div className="error-msg">Please hold on... or refresh</div>
        ) : (
          <>
            <div className="intro">
              <h4>List of users</h4>
            </div>
              <Users users={users} />
          </>
        )
      }
      <TaskModal 
        user={user}
        show={show}
        close={close}
      />
    </DashBoardSection>
  )
}

const DashBoardSection = styled.section`
  background-color: var(--off-white);
  min-height: 100vh;

  header {
    text-align: center;
    background-color: var(--secondary-dark);
    color: var(--accent-color);
    padding: 2rem 0;
    font-size: calc(2.5rem * var(--base-size));
    position: relative;
  }

  .error-msg {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(2.5rem * var(--base-size));
    font-weight: 600;
    line-height: 120%;
    color: var(--secondary-dark);
  }

  .intro {
    padding: 3rem 0;
    text-align: center;
    color: var(--secondary-dark);
    font-size: calc(2.5rem * var(--base-size));
    line-height: 150%;
  }
`;

export default AdminDashboard;