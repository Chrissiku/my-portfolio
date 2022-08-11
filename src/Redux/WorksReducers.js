/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import { LOAD_WORKS, INITIAL_STATE } from "./Constants";

const WorksReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_WORKS:
      return action.payload;
    default:
      return state;
  }
};

export default WorksReducers;
