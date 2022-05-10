/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

import User from './User'

const Users = ({ users }) => {
  return (
    <UserList>
      {
        users.map(user => {
          const {name, userId, email, tasks} = user;

          return (
            <User 
              key={userId}
              id={userId}
              name={name}
              email={email}
              tasks={tasks}
            /> 
          )
        })
      }
    </UserList>
  )
}

const UserList = styled.section`
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media only screen and (min-width: 600px) {
    padding: 3rem 5%;
  }

  @media only screen and (min-width: 900px) {
    padding: 3rem 10%;
  }
`;

export default Users;