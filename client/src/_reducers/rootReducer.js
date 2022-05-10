import { combineReducers } from "@reduxjs/toolkit";
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import { taskServices } from "../_services/taskServices";
import alerReducer from "./alertReducer";

const rootReducer = combineReducers({ 
  authentication: loginReducer,
  register: registerReducer,
  alert: alerReducer,
  [taskServices.reducerPath]: taskServices.reducer
})

export default rootReducer;