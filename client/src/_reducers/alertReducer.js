import { alertConstants } from "../_actions/type";

export default function alerReducer(state={}, action) {
  if(action.type === alertConstants.ALERT_SUCCESS) {
    return { success: action.payload.message, error: "" }
  }

  if(action.type === alertConstants.ALERT_ERROR) {
    return { success: "", error: action.payload.message }
  }

  if(action.type === alertConstants.CLEAR_ALERT) {
    return {}
  }

  return state
}