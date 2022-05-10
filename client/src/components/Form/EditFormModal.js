/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useUpdateTaskMutation } from '../../_services/taskServices';

import { utils } from '../../_utils/index';
import Input from './Input';
import FormButton from './FormButton';

const EditFormModal = ({ show, close, tasks, userId, id }) => {
  const [updateTask] = useUpdateTaskMutation()

  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [error, setError] = useState();

  useEffect(function() {
    const task = tasks.find(task => task._id === id)

    setTaskName((task?.name || ""))
    setTaskDate((task?.doAt || ""))
  }, [id, tasks]);

  const handleTaskName = ({ target }) => {
    setTaskName(target.value)
  }

  const handleTaskDate = ({ target }) => {
    setTaskDate(target.value)
  }

  const saveChanges = (e) => {
    e.preventDefault()

    if(!utils.checkEmptyFields({ taskName, taskDate })) {
      setError("All fields are required")
      return;
    }

    const tasksUpdate = tasks.map(task => {
      if(task._id === id) {
        return { 
          ...task, 
          name: taskName, 
          doAt: new Date(taskDate)
            .toLocaleDateString(),  
        }
      }

      return task
    })

    updateTask({
      id: userId,
      tasks: tasksUpdate
    })

    close()
  }

  return (
    <ModalWrapper className={`${ show ? "show-modal" : "" }`}>
      <div className="modal">
        <div className="close-btn-container" onClick={() => close()}>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="m12 13.4-4.9 4.9q-.3.3-.7.3-.4 0-.7-.3-.3-.3-.3-.7 0-.4.3-.7l4.9-4.9-4.9-4.9q-.3-.3-.3-.7 0-.4.3-.7.3-.3.7-.3.4 0 .7.3l4.9 4.9 4.9-4.9q.3-.3.7-.3.4 0 .7.3.3.3.3.7 0 .4-.3.7L13.4 12l4.9 4.9q.3.3.3.7 0 .4-.3.7-.3.3-.7.3-.4 0-.7-.3Z"/>
            </svg>
          </button>
        </div>
        <h3>Edit task</h3>
        <div className="modal-body">
          <form onSubmit={saveChanges}>
            <Input 
              placeholder="Enter your to-do"
              label="To-do"
              value={taskName}
              name="task_name"
              onChange={handleTaskName}
              error={error}
              required
            />
            <Input 
              type="date"
              placeholder="Enter task deadline"
              label="To be done at"
              value={taskDate}
              name="do_at"
              onChange={handleTaskDate}
              error={error}
            />
            <FormButton 
              type="submit"
              color="#cac333"
              full_width
              border="#03131e"
              bgColor="#03131e"
              value="Save"
              onClick={() => {}}
            />
          </form>
        </div>
      </div>
    </ModalWrapper>
  )
}

const ModalWrapper = styled.section`
  transform: scale(0);
  -moz-transform: scale(0);
  -webkit-transform: scale(0);
  transition: var(--transition-val);
  -moz-transition: var(--transition-val);
  -webkit-transition: var(--transition-val);
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &.show-modal {
    transform: scale(1);
    -moz-transform: scale(1);
    -webkit-transform: scale(1);
    visibility: visible;
    opacity: 1;
    z-index: 10;
  }

  .modal {
    max-width: 500px;
    width: 100%;
    background-color: var(--off-white);
    padding: 2rem;
    border-radius: 8px;

    .close-btn-container {
      text-align: right;

      button {
        background-color: transparent;
        border: none;
        padding: 0;
      }
    }

    h3 {
      font-size: calc(2.5rem * var(--base-size));
      line-height: 150%;
      color: var(--secondary-dark);
    }

    form {
      display: grid;
      gap: 2rem;
    }
  }
`;

export default EditFormModal