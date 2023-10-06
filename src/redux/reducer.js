import { EXERCISE } from "./actions.constants";

const initialState = {
  loading: false,
  exercises: [],
  foods: [],
  goals: [],
  error: null
};

export const trackerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case EXERCISE.ADD_EXERCISE_LOADING:
      return {
        ...state,
        loading: true
      };
    case EXERCISE.ADD_EXERCISE_SUCCESS:
      return {
        ...state,
        loading: false,
        exercise: [...state.exercises, payload]
      };
    case EXERCISE.ADD_EXERCISE_FAILURE:
      return {
        ...state,
        loading: false,
        error: "Error while add exercise"
      };
    default:
      return state;
  }
};
