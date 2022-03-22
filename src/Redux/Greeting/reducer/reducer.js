import { START, FAILURE, GET } from '../action/action';

const greetingReducer = (state = {}, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        loading: true,
      };
    case FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET:
      return {
        ...state,
        loading: false,
        error: false,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default greetingReducer;
