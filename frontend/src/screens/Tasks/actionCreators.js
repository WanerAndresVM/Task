import Actions from "./../../redux/actionTypes";
import axios from "axios";

const getTask = (idUser, token) => async dispatch => {
  axios
    .get(`http://127.0.0.1:8000/api/task/list/?id=${idUser}`, {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    .then(res => {
      console.log(res.data);
      return dispatch({
        type: Actions.GET_TASK_SUCCES,
        tasks: res.data
      });
    })
    .catch(err => {
      return dispatch({
        type: Actions.GET_TASK_ERROR
      });
    });
};

export { getTask };
