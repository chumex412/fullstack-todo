import React, { useState, useCallback } from 'react'

import Input from './Input'
import FormButton from './FormButton'
import { useAddTaskMutation } from '../../_services/taskServices'
import { utils } from '../../_utils/index'

const TaskForm = ({id}) => {
  const [addTask] = useAddTaskMutation()

  const [fields, setFields] = useState({
    task_name: "",
    do_at: ""
  })

  const [error, setError] = useState("")

  const handleChange = useCallback(({target}) => {
    const { name, value } = target;

    setFields({ ...fields, [name]: value })
  }, [fields])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!utils.checkEmptyFields(fields)) {
      setError("All fields are required")
      return 
    }

    const data = {
      name: fields.task_name, 
      doAt: fields.do_at, 
      completed: false
    }

    addTask({ id, ...data })
  }

  return (
    <>
      <form className="task-form" onSubmit={handleSubmit}>
        <Input 
          placeholder="Enter your to-do"
          label="To-do"
          value={fields.task_name}
          name="task_name"
          onChange={handleChange}
          error={error}
          required
        />
        <Input 
          type="date"
          placeholder="Enter task deadline"
          label="To be done at"
          value={fields.do_at}
          name="do_at"
          onChange={handleChange}
          error={error}
          required
        />
        <FormButton 
          type="submit"
          color="#f8fafb"
          full_width
          border="#206da0"
          bgColor="#206da0"
          value="Add Task"
          onClick={() => {}}
        />
      </form>
    </>
  )
}

export default TaskForm