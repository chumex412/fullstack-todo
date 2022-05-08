const LOGIN_REQUEST = 'login/request';
const LOGIN_SUCCESS = 'login/success';
const LOGIN_ERROR = 'login/error';

const REGISTER_REQUEST = 'register/request';
const REGISTER_SUCCESS = 'regsiter/success';
const REGISTER_ERROR = 'register/error';

const GET_TASK = 'task/get';
const ADD_TASK = 'task/add';
const COMPLETE_TASK = 'task/complete';
const DELETE_TASK = 'task/delete';

const USERS_GETALL = 'users/getall';

export const loginConstants = {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
}

export const registerConstants = {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR
}

export const taskConstants = {
  GET_TASK,
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK
}

export const adminConstants ={
  USERS_GETALL
}