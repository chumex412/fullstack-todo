/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useTasksQuery } from '../../_services/taskServices'
import useGlobalContext from '../../custom/Context'

import TaskForm from '../Form/TaskForm'
import Tasks from '../Tasks'
import {todoTabs} from "../../data/todo"
import Loader from '../Loader/index'


const UserDashboard = ({user}) => {
  const { data, isLoading, isSuccess } = useTasksQuery(user.userId);
  const [todoTab, setTodoTab] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState([])
  const [tasks, setTasks] = useState([])

  const { toggleSidebar, showSidebar } = useGlobalContext()

  useEffect(function () {
    setFilteredTasks((data?.tasks || []))
    setTasks((data?.tasks || []))
  }, [data])

  const sortTasks = (tab) => {
    if(tab === 'All') {
      setFilteredTasks(tasks)
    }

    if(tab === 'Completed') {
      setFilteredTasks(tasks.filter(task => task.completed))
    }

    if(tab === 'Pending') {
      setFilteredTasks(tasks.filter(task => !task.completed))
    }

    setTodoTab(tab)
  }

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
      <div>
        <header>
          <button className="sidebar-toggler" onClick={toggleSidebar}>
            {hamburger}
          </button>
          <h2>Task Manager</h2>
        </header>
        <div className="form-container">
          <TaskForm id={user.userId} />
        </div>
      </div>
      <TodoContent>
        { isLoading ? (
          <div style={{
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '30px'
          }}>
            <Loader />
          </div>
          ) : isSuccess ? (
            <>
              <section className="tab-container">
                {
                  todoTabs.map(tab => {
                    return (
                      <button 
                        key={tab} 
                        onClick={() => sortTasks(tab)}
                        style={{
                          borderBottom: `3px solid ${tab === todoTab ? "#206da0" : "#03131e"}`
                        }}
                      >{tab}</button>
                    )
                  })
                }
              </section>
              <section>
                <Tasks 
                  tasks={(filteredTasks || [])}
                  userId={user.userId} 
                />
              </section>
            </>
          ) : (
            <p style={{
              fontSize: "1.4rem",
              lineHeight: "150%",
              textAlign: "center"
            }}>Failed to fetch</p>
          )
        }
      </TodoContent>
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

  .form-container {
    margin: 2rem 0;
    padding: 1.5rem;
  }

  .task-form  {
    max-width: 650px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    gap: 1.5rem;
    padding: 2rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
  }
`;

const TodoContent = styled.section`
  padding: 2rem 1.5%;

  & > section:last-child {
    margin-top: 2rem;
  }
 
  h3 {
    font-size: calc(2rem * var(--base-size));
    line-height: 120%;
    text-align: center;
  }

  .tab-container {
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 2rem;

    button {
      border-radius: 0;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 900px) {
    padding: 2rem 10%;
  }
`;

export default UserDashboard