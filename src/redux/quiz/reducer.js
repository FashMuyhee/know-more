
/**
 * Quiz State Reducer
 *
 */
import { LOADING, FETCH_QUESTIONS, UPDATE_SCORE } from "./type";

const initialState = {
  loading: false,
  questions: [],
  score: 0,
};

const QuizReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loading: false,
      };
    case UPDATE_SCORE:
      return {
        ...state,
        score: action.payload,
      };

    default:
      return state;
  }
};

export default QuizReducer;
