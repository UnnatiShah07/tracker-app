import "./exercise.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExercise } from "../../redux/actions";
import { calculateCaloriesBurned } from "../../utils";

export const Exercise = () => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  const dispatch = useDispatch();

  const handleAddExercise = (e) => {
    e.preventDefault();
    const caloriesBurned = calculateCaloriesBurned(name, Number(duration));
    console.log("caloriesBurned", caloriesBurned);
    dispatch(addExercise({ name, duration: Number(duration), caloriesBurned }));
    setName("");
    setDuration("");
  };

  return (
    <div>
      <h2>Add New Exercise</h2>
      <form>
        <label htmlFor="name">*Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="duration">*Duration:</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <small>(in mintues)</small>

        <button onClick={handleAddExercise}>Add</button>
      </form>
    </div>
  );
};
