import * as types from "../types/demo";

const initState = {
  loading: false,
  error: false,
  data: {},
};

export default function signInEmailReducer(
  state = initState,
  { type, payload }
) {
  switch (type) {
    case types.LOGIN_EMAIL_REQUEST:
      return { ...state, loading: true };

    case types.LOGIN_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload.data,
        code: payload.data.code,
      };

    case types.LOGIN_EMAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
        code: payload.error.code,
      };
    case types.LOGIN_EMAIL_REFRESH:
      return {
        ...state,
        loading: false,
        error: false,
        code: undefined,
      };

    default:
      return state;
  }
}
