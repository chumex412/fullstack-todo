import React from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { authenticate } from '../_selectors/userSelector'

const ProtectedRoute = ({ children, authenticated }) => {
  
  if(!authenticated) {
    return <Navigate to='/login' replace={true} />
  } else {
    return children;
  }
}

const mapStateToProps = state => {
  return {
    authenticated: authenticate(state)
  }
}

export default connect(mapStateToProps)(ProtectedRoute)