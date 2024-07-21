import { Link } from "react-router-dom";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <div>
      <Link to="/characters">See Characters</Link>
      <Link to="/ships">See Ships</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
