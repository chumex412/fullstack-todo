import { registerConstants } from "../_actions/type";

const registerReducer = (state={}, action) => {

  if(action.type === registerConstants.REGISTER_REQUEST) {
    return {
      loading: true,
      success: '',
      error: ''
    }
  }

  if(action.type === registerConstants.REGISTER_SUCCESS) {
    return {
      ...state,
      loading: false,
      success: action.payload.message
    }
  }

  if(action.type === registerConstants.REGISTER_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload.error
    }
  }

  return state
}

export default registerReducer;