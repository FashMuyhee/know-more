/**
 * General State Action Creator
 *
 */
import { SET_USER } from "./type";
/**
 * a function to save user's name to state
 * @param  {} user
 */

export const saveUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: SET_USER,
      payload: user,
    });
  };
};
