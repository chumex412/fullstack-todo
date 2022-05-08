import { loginAction } from "./creator";
import { userServices } from "../_services/userServices";

function login(user, from) {
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

    } catch(err) {
      dispatch(loginAction().error())
    }   
  }
}

export const userAction = {
  login
}