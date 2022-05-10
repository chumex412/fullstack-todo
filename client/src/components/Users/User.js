import React from 'react'
import styled from 'styled-components'
import useGlobalContext from '../../custom/Context';

const User = ({ name, id, email, tasks }) => {
  const { open } = useGlobalContext();
  const completedTasksNum = tasks.filter(task => task.completed);

  return (
    <UserDetails>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <Content>
        <div>
          <div className="task-status">
            <span className="completed"></span>
            <p>
              completed tasks : {" "}
              {completedTasksNum.length}
            </p>
          </div>
          <div className="task-status">
            <span className="pending"></span>
            <p>
              pending tasks : {" "}
              {tasks.length - completedTasksNum.length}
            </p>
          </div>
        </div>
        <button onClick={() => open(id)}>
          View tasks
        </button>
      </Content>
    </UserDetails>
  )
}

const UserDetails = styled.article`
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  background-color: var(--gray-color-1);

  & > p {
    font-size: calc(1.8rem * var(--base-size));
    line-height: 150%;
    color: var(--primary-color);

    &:first-child {
      font-weight: 600;
    }
  } 
`;

const Content = styled.section`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .task-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      &.pending {
        background-color: #ca9033;
      }
      &.completed {
        background-color: #2062a0;
      }

    }

    p {
      font-size: calc(1.35rem * var(--base-size));
      line-height: 150%;
      color: var(--secondary-dark);
    }
  }

  button {
    background-color: var(--secondary-dark);
    color: var(--accent-color);
    border: 1px solid var(--accent-color);
    font-size: calc(1.4rem * var(--base-size));
    line-height: 150%;
  }
`;

export default User