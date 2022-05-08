import { combineReducers } from "@reduxjs/toolkit";
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import { taskServices } from "../_services/taskServices";

const rootReducer = combineReducers({ 
  authentication: loginReducer,
  register: registerReducer,
  [taskServices.reducerPath]: taskServices.reducer
})

export default rootReducer;