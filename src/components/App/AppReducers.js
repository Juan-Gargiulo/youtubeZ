import types from '../../constants.js'

const initialState = {
      tkn: null,
      profile: {},
      logged: false,
};

const AppReducers = (state = initialState, action) => {
  switch (action.type) {

    case types.LOGIN:
      return {
        ...state,
        tkn: action.payload.accessToken,
        profile: action.payload,
        logged: true
      };

    case types.LOGOUT:
      console.log("logout")
      return {
        ...state,
        profile: {},
        logged: false
      };

    case types.YT_SEARCH_VIDEO_START:
      return {
        ...state,
        videos: {
          data: {},
          loading: true,
        },
      };

    case types.YT_SEARCH_VIDEO_END:
      return {
        ...state,
        videos: {
          data: action.payload,
          loading: false,
        },
      };

    default:
      return state;
  }
};

export default AppReducers;