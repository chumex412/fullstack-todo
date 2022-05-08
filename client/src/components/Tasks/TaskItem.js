import React from 'react'
import styled from 'styled-components'

const TaskItem = ({ 
  id, 
  name, 
  completed, 
  completeTask, 
  remove,
  showModal 
}) => {

  return (
    <ItemContainer style={{borderBottom: completed ? "5px solid #2062a0" : "5px solid #ca9033"}}>
      <div className="task-content">
        <p style={{
          backgroundColor: completed ? "#2062a0" : "#ca9033",
        }}>{completed ? "Done" : "Pending"}</p>
        <div>
          <label>{name}</label>
          <div className="task-action">
            <button onClick={() => showModal(id)}>Edit</button>
            <button onClick={() => remove(id)}>Delete</button>
          </div>
        </div>
        <input
          type="checkbox" 
          checked={completed}
          onChange={() => completeTask(id)}
        />
      </div>
    </ItemContainer>
  )
}

const ItemContainer = styled.article`
  border-radius: 5px;
  background-color: var(--gray-color-1);
  padding: 2rem;
  box-shadow: 0 10px 20px 2px rgba(0, 0, 0, 0.15);
  transition: var(--transition-val);
  -moz-transition: var(--transition-val);
  -webkit-transition: var(--transition-val);

  .task-content {
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    gap: 3.5rem;
  }

  p {
    color: #ffffff;
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
    font-size: calc(1.6rem * var(--base-size));
    line-height: 150%;
    font-weight: 600;
  }

  label {
    font-size: calc(1.8rem * var(--base-size));
    line-height: 150%;
    color: var(--secondary-color); 
  }

  .task-action {
    display: flex;
    gap: 3rem;
    margin-top: 2rem;

    button {
      background-color: transparent;
      border: none;
      padding: 0;
      font-weight: 700;
      font-size: calc(1.6rem * var(--base-size));
      line-height: 150%;

      &:first-child {
        color: var(--accent-color);
      }

      &:last-child {
        color: var(--red-color);
      }
    }
  }
`;

export default TaskItem;