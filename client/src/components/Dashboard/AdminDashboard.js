import React from 'react'

import Users from '../Users/index';

const AdminDashboard = ({ users }) => {
  return (
    <DashBoardSection>
      <Users users={(users || [])} />
    </DashBoardSection>
  )
}

const DashBoardSection = styled.section`

`;

const UserList = styled.section`
  
`

export default AdminDashboard;