import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import UserDashboard from './UserDashboard';
import AdminDashBoard from './AdminDashboard';
import { getUser } from '../../_selectors/userSelector';

const Dashboard = ({ user }) => {

  if(user.admin) {
    return (
      <DashBoardCenter>
        <AdminDashBoard />
      </DashBoardCenter>
    )
  } else {
    return (
      <DashBoardCenter>
        <UserDashboard user={user} />
      </DashBoardCenter>
    )
  }
  
}

const DashBoardCenter = styled.div`
  
`;

const mapStateToProps = (state) => {
  return {
    user: getUser(state)
  }
}

export default connect(mapStateToProps)(Dashboard);