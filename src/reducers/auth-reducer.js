const intialAuthState = {
  isLoggedIn: false,
  userData: {},
};

export const authReducer = (state = intialAuthState, action) => {
  switch (action.type) {
    case "login": {
      return {
        ...state,
        isLoggedIn: true,
        userData: action.payload.userData
      };
    }
    case "logout": {
      return {
        ...state,
        isLoggedIn: false,
        userData:{}
      };
    }
    default:
      return state;
  }
};
