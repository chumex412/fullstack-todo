import React, { useState } from 'react'
import styled from 'styled-components'

import Input from '../Form/Input'
import FormButton from '../Form/FormButton'
import Tasks from '../Tasks'
import {todoTabs} from "../../data/todo"

const UserDashboard = ({tasks}) => {
  const [error, setError] = useState("");
  const [todoTab, setTodoTab] = useState("All")
  return (
    <DashBoardSection>
      <form>
        <Input 
          placeholder="Enter your to-do"
          label="To-do"
          value=""
          hasError={error}
          onChange={() => {}}
        />
        <FormButton 
          type="submit"
          color="#a9a21f"
          full_width
          border="#03131e"
          bgColor="#03131e"
          value="Submit"
        />
      </form>
      <TodoContent>
        <header>
          {
            todoTabs.map(tab => {
              return <p>{tab}</p>
            })
          }
        </header>
        <section>

          <h3>Today's tasks</h3>
          <Tasks tasks={(tasks || [])} />
        </section>
      </TodoContent>
    </DashBoardSection>
  )
}

const DashBoardSection = styled.section`
  
`;

const TodoContent = styled.section`

`;

export default UserDashboard