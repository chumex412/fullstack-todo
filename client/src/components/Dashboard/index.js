/* eslint-disable react/prop-types */
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
  } 
  
  if(!user.admin) {
    return (
      <DashBoardCenter>
        <UserDashboard user={user} />
      </DashBoardCenter>
    )
  } else {
    return <div>{null}</div>
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