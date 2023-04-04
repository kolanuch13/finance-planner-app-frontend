export const isLoggedIn = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.user.token;
export const balance = state => state.auth.user.balance;
export const getUser = state => state.auth.user;
export const selectIsLoading = state => state.auth.isLoading;
export const nickName = state => state.auth?.user?.userName;
