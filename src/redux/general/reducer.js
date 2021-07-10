/**
 * General State Reducer
 *
 */
import { SET_USER, LOADING } from "./type";

const initialState = {
  loading: false,
  user: "",
};

const GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: true,
      };

    default:
      return state;
  }
};

export default GeneralReducer;
