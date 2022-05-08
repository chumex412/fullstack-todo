import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useTasksQuery } from '../../_services/taskServices'

import TaskForm from '../Form/TaskForm'
import Tasks from '../Tasks'
import {todoTabs} from "../../data/todo"

const UserDashboard = ({user}) => {
  const { data, error, isLoading, isSuccess } = useTasksQuery(user.userId);
  const [todoTab, setTodoTab] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState([])
  const [tasks, setTasks] = useState([])

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

  return (
    <DashBoardSection>
      <div>
        <header>
          <h2>Task Manager</h2>
        </header>
        <TaskForm id={user.userId} />
      </div>
      <TodoContent>
        { isLoading ? (
          <div>...Loading</div>
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
  }

  .task-form  {
    max-width: 650px;
    width: 100%;
    margin: 2rem auto;
    display: grid;
    gap: 1.5rem;
    padding: 2rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
  }
`;

const TodoContent = styled.section`
  padding: 2rem 10%;

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
`;

export default UserDashboard