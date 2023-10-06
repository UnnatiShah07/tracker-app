import { Routes, Route } from "react-router-dom";
import { Header } from "../components";
import { Dashborad, Exercise, Food, Goal } from "../pages";

export const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashborad />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/food" element={<Food />} />
        <Route path="/goal" element={<Goal />} />
      </Routes>
    </>
  );
};
