import {loginConstants} from '../_actions/type';

const user = sessionStorage.getItem ? JSON.parse(sessionStorage.getItem('user')) : null;

const initialState = {
  user,
  isAuthenticated: !user ? false : true,
  loading: false,
  error: ''
}

const loginReducer = (state=initialState, action) => {
  if(action.type === loginConstants.LOGIN_REQUEST) {
    return { 
      error: '', 
      loading: true, 
      user: {}, 
      isAuthenticated: false 
    }
  }

  if(action.type === loginConstants.LOGIN_SUCCESS) {
    return { 
      ...state, 
      loading: false, 
      user: action.payload, 
      isAuthenticated: true 
    }
  }

  if(action.type === loginConstants.LOGIN_ERROR) {
    return {
      ...state,
      error: action.payload.error,
      loading: false,
    }
  }

  if(action.type === loginConstants.LOGOUT) {
    return {
      ...state,
      isAuthenticated: false,
      user: {}
    }
  }

  return state
}

export default loginReducer