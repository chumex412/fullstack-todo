import React from 'react'

const Users = ({ users}) => {
  return (
    <section>
      {
        users.map(user => {
          const {username} = user;

          return (
            <article>
              <p>{username}</p>
            </article>
          )
        })
      }
    </section>
  )
}

export default Users;