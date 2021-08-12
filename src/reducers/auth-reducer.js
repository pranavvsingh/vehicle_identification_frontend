import { getData } from "src/utils/localStorageUtil";

const initialAuthState = {
  isLoggedIn: !!getData('token'),
  userData: {},
};

export const authReducer = (state = initialAuthState, action) => {
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
