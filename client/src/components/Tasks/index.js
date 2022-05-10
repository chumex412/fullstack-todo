import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import TaskItem from './TaskItem';

import EditFormModal from '../Form/EditFormModal';
import { useUpdateTaskMutation, useRemoveTaskMutation } from '../../_services/taskServices';

const Tasks = ({tasks, userId}) => {
  const [updateTask] = useUpdateTaskMutation();
  const [removeTask] = useRemoveTaskMutation();

  const [futureTask, setFutureTask] = useState([]);
  const [overdue, setOverdue] = useState([]);
  const [show, setShow] = useState(false);
  const [itemId, setItemId] = useState('');

  useEffect(function () {
    const willDoTasks = tasks.filter(task => (Date.now() <= new Date(task.doAt).getTime()))

    const pastDeadlineTasks = tasks.filter(task => (Date.now() >new Date(task.doAt).getTime() ))

    setFutureTask(willDoTasks);

    setOverdue(pastDeadlineTasks)
  }, [tasks])

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
      <section className="task-container">
        {!overdue.length ? (
          <p>You have no pending task</p>
          ) : (
            <>
              <h3>Overdue tasks</h3>
              {
                overdue.map(task => {
                  const { completed, name, _id, doAt } = task;
                  return (
                    <TaskItem 
                      key={_id}
                      id={_id}
                      name={name}
                      time={doAt}
                      completed={completed}
                      completeTask={completeTask}
                      remove={removeTaskHandler}
                      showModal={showModal}
                    />
                  )
                })
              }
            </>
          )
        }
      </section>

      <section className="task-container">
        {!futureTask.length ? (
          <p>You have scheduled no task</p>
          ) : (
            <>
              <h3>Today's tasks</h3>
              {
                futureTask.map(task => {
                  const { completed, name, _id, doAt } = task;
                  return (
                    <TaskItem 
                      key={_id}
                      id={_id}
                      name={name}
                      time={doAt}
                      completed={completed}
                      completeTask={completeTask}
                      remove={removeTaskHandler}
                      showModal={showModal}
                    />
                  )
                })
              }
            </>
          )
        }
      </section>
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

  .task-container {
    padding: 1.5rem 0;
    display: grid;
    gap: 2rem;

    & > p {
      font-size: calc(1.8rem * var(--base-size));
      line-height: 150%;
      font-weight: 600;
      text-align: center;
    }
  }
`;

export default Tasks