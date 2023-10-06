import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/exercise">Exercise</Link>
      <br />
      <Link to="/food">Food</Link>
      <br />
      <Link to="/goal">Goal</Link>
    </div>
  );
};
