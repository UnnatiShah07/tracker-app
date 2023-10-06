const METRates = [
  { name: "running", rate: 8 },
  { name: "jogging", rate: 8 },
  { name: "yoga", rate: 3 },
  { name: "bicycling", rate: 5.3 },
  { name: "walking", rate: 2.9 },
  { name: "rope jumping", rate: 12.3 },
  { name: "swimming", rate: 4.5 }
];

export const calculateCaloriesBurned = (exerciseName, duration) => {
  const MET =
    METRates.find(
      ({ name }) => name.toLowerCase() === exerciseName.toLowerCase()
    )?.rate ?? 5;
  const burnedCalories = (duration * MET * 3.5 * 60) / 200;
  return burnedCalories;
};
