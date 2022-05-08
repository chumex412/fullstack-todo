
import { loginConstants, registerConstants, taskConstants } from './type'

function loginAction () {
  return {
    request() {
      return {
        type: loginConstants.LOGIN_REQUEST
      }
    },
    success(user) {
      return {
        type: loginConstants.LOGIN_SUCCESS,
        payload: user
      }
    },
    error(error) {
      return {
        type: loginConstants.LOGIN_ERROR,
        payload: {
          error
        }
      }
    }
  }
}

function registerAction () {
  return {
    request() {
      return {
        type: registerConstants.REGISTER_REQUEST
      }
    },
    success(message) {
      return {
        type: registerConstants.REGISTER_SUCCESS,
        payload: {
          message
        }
      }
    },
    error(error) {
      return {
        type: registerConstants.REGISTER_ERROR,
        payload: {
          error
        }
      }
    }
  }
}

function tasksAction() {
  return {
    get(tasks) {
      return {
        type: taskConstants.GET_TASK,
        payload: tasks
      }
    },
    add(task) {
      return {
        type: taskConstants.ADD_TASK,
        payload: task
      }
    },
    delete(id) {
      return {
        type: taskConstants.DELETE_TASK,
        payload: {
          id
        }
      }
    }
  }
}

export {
  loginAction,
  registerAction,
  tasksAction
}