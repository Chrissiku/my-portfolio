/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const LOAD_WORKS = "LOAD_WORKS";
const INITIAL_STATE = [];

const WorksReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_WORKS:
      return action.payload;
    default:
      return state;
  }
};

export default WorksReducers;
