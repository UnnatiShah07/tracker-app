import { EXERCISE } from "./actions.constants";

export const addExercise = (exercise) => async (dispatch) => {
  try {
    dispatch({ type: EXERCISE.ADD_EXERCISE_LOADING });
    const response = await fetch(
      "https://assignment-17-tracker.unnatishah07.repl.co/exercise",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(exercise)
      }
    );
    const data = response.json();
    console.log("data form add exercise", data);
    dispatch({ type: EXERCISE.ADD_EXERCISE_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error while adding exercie:", error);
    dispatch({ type: EXERCISE.ADD_EXERCISE_FAILURE });
  }
};
