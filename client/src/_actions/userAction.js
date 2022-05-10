import { loginAction, registerAction, alertAction } from "./creator";
import { userServices } from "../_services/userServices";

function login(user) {
  return async (dispatch) => {
    dispatch(loginAction().request())

    try {
      const res = await userServices.login(user)
      
      if(!res.success) {
        throw new Error(res.message)
      }

      const userData = {
        name: res.user.name,
        email: res.user.email,
        admin: res.user.admin,
        userId: res.user.userId
      }

      sessionStorage.setItem('user', JSON.stringify(userData))

      dispatch(loginAction().success(userData))
      dispatch(alertAction().success(res.message))

    } catch(err) {
      dispatch(loginAction().error(err.message))
      dispatch(alertAction().error(err.message))
    }   
  }
}

function register(profile) {
  return async (dispatch) => {
    dispatch(registerAction().request())

    try {
      const res = await userServices.register(profile)
      
      if(!res.success) {
        throw new Error(res.message)
      }

      dispatch(registerAction().success(res.message))
      dispatch(alertAction().success(res.message))
    } catch(err) {
      dispatch(registerAction().error(err.message))
      dispatch(alertAction().error(err.message))
    }   
  }
}

export const userAction = {
  login,
  register
}