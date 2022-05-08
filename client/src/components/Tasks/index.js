import React, { useState } from 'react'
import styled from 'styled-components';

import TaskItem from './TaskItem';

import EditFormModal from '../Form/EditFormModal';
import { useUpdateTaskMutation, useRemoveTaskMutation } from '../../_services/taskServices';

const Tasks = ({tasks, userId}) => {
  const [updateTask] = useUpdateTaskMutation();
  const [removeTask] = useRemoveTaskMutation();

  const [today, setToday] = useState([]);
  const [overdue, setOverdue] = useState([]);
  const [show, setShow] = useState(false);
  const [itemId, setItemId] = useState('');

  const showModal = (id) => {
    setShow(true)
    setItemId(id)
  }

  const closeModal = () => {
    setShow(false)
  }

  // Handler to complete a task
  const completeTask = (id) => {
    const completedTask = tasks.map(task => {
      if(id === task._id) {
        return { ...task, completed: !task.completed }
      }

      return task
    })

    updateTask({
      id: userId,
      tasks: completedTask
    })
  }

  // Handler to remove a task
  const removeTaskHandler = (id) => {
    const filteredTask = tasks.filter(task => task._id !== id)

    removeTask({
      id: userId,
      tasks: filteredTask
    })
  }

  return (
    <TaskList>
      <h3>Today's tasks</h3>
      {
        tasks.map(task => {
          const { completed, name, _id } = task;
          return (
            <TaskItem 
              key={_id}
              id={_id}
              name={name}
              completed={completed}
              completeTask={completeTask}
              remove={removeTaskHandler}
              showModal={showModal}
            />
          )
        })
      }
      <EditFormModal 
        show={show}
        close={closeModal}
        tasks={tasks}
        userId={userId}
        id={itemId}
      />
    </TaskList>
  )
}

const TaskList = styled.section`
  padding: 1.5rem;
  display: grid;
  gap: 2rem;
`;

export default Tasks