import React from 'react'

const Tasks = ({tasks}) => {

  return (
    <section>
      {
        tasks.map(task => {
          const { completed, name, id } = task;
          return (
            <article key={id}>
              <label>{name}</label>
              <input
                type="checkbox" 
                value={completed}
                onChange={() => {}}
              />
            </article>
          )
        })
      }
    </section>
  )
}

export default Tasks