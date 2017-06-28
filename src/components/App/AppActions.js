import types from '../../constants'

export function LoginAct(user) {
  return (dispatch) => {
    dispatch({
      type: types.LOGIN,
      payload: user,
    });
  };
}

export function LogoutAct() {
  return (dispatch) => {
    console.log("action")
    dispatch({
      type: types.LOGOUT
    });
  };
}