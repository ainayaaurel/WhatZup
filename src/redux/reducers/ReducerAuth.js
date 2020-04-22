const initialState = {
  profile: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return {
        ...state,
        profile: {},
      };
    case 'LOGIN_REJECTED':
      return {
        ...state,
        profile: {},
      };
    case 'LOGIN_FULFILLED':
      return {
        ...state,
        profile: action.payload,
      };
  }
}
