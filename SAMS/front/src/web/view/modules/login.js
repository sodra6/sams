// action types
const LOGIN = "login/LOGIN";
const GRANT_TYPE = "login/GRANT_TYPE";

// action creators
export const login = loginState => ({ type: LOGIN, loginState });
export const grantType = grantType => ({ type: GRANT_TYPE, grantType });

// initial state
const initialState = {
  grantType: "bearer",
  loginState: false,
};

// reducer
export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginState: true,
      };
    case GRANT_TYPE:
      return {
        ...state,
        grantType: action.grantType,
      };
    default:
      return state;
  }
}
