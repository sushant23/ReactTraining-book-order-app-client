export * from "./auth/actions";
export * from "./book/actions";
export * from "./order/actions";

export const createAuthenticatedAction = callback => {
  return (dispatch, getState) => {
    const { user } = getState().auth;
    if (user) {
      callback(dispatch, user.token);
    }
  };
};
