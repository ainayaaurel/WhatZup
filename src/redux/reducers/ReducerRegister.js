const initialState = {
  userdetails: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'IS_REGISTER_PENDING':
      return {
        ...state,
        userdetails: {},
      };
    case 'IS_REGISTER_REJECTED':
      return {
        ...state,
        userdetails: {},
      };
    case 'IS_REGISTER_FULFILLED':
      return {
        ...state,
        userdetails: action.payload,
      };
    default:
      return state;
  }
}
