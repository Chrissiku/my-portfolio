/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import { LOAD_WORKS, BASE_URL } from "./Constants";

const FetchWorks = (data) => ({
  type: LOAD_WORKS,
  payload: data,
});

const LoadAllWOrks = () => async (dispatch) => {
  const response = await fetch(BASE_URL);
  const { works } = await response.json();
  dispatch(FetchWorks(works));
};

export default LoadAllWOrks;
