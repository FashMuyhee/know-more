/**
 * Quiz State Action Creator
 *
 */
import { FETCH_QUESTIONS, UPDATE_SCORE, LOADING } from "./type";

/**
 * function to fetch questions fro the endpoint
 * @returns dispatch
 */

export const fetchQuestions = () => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&category=28&type=multiple",
      { method: "get" }
    );
    const data = await res.json();
    const result = data.results;

    // function to remap the api result
    const reMapResult = result.map((item, key) => ({
      answerOptions: [
        { answer: item.correct_answer, isCorrect: true },
        { answer: item.incorrect_answers[0], isCorrect: false },
        { answer: item.incorrect_answers[1], isCorrect: false },
        { answer: item.incorrect_answers[2], isCorrect: false },
      ],
      id: key,
      category: item.category,
      difficulty: item.difficulty,
      correct_answer: item.correct_answer,
      question: item.question,
    }));

    // saving mapped result to state
    if (res.ok) {
      dispatch({
        type: FETCH_QUESTIONS,
        payload: reMapResult,
      });
      // reset the score to 0
      dispatch({
        type: UPDATE_SCORE,
        payload: 0,
      });
    } else {
      console.log("Unable to fetch data from the API BASE URL!");
    }
  };
};

/**
 *function to update  user's score
 */
export const updateScore = (score) => {
  return async (dispatch) => {
    dispatch({
      type: UPDATE_SCORE,
      payload: score,
    });
  };
};
