export const getUserName = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getToken = state => state.auth.Token;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getAuthStatus = state => state.auth.status;