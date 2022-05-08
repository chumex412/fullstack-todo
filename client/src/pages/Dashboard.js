import React from 'react'
import styled from 'styled-components'

import Sidebar from '../components/Sidebar/index'
import Dashboard from '../components/Dashboard/index'

const DashboardPage = () => {
  return (
    <DashBoardContent>
      <Sidebar />
      <Dashboard />
    </DashBoardContent>
  )
}

const DashBoardContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 350px 1fr;
  }
`;

export default DashboardPage;