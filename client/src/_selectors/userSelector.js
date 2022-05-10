
// Login
export const loginSuccess = state => state.authentication.success;
export const loginLoading = state => state.authentication.loading;
export const getUser = state => state.authentication.user;
export const authenticate = state => state.authentication.isAuthenticated;

//Registration
export const registerSuccess = state => state.register.success;
export const registerLoading = state => state.register.loading;

// Alert selectors
export const successAlert = state => state.alert.success;

export const errorAlert = state => state.alert.error;
