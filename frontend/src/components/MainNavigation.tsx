import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul className="flex justify-center gap-4">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/characters"
              end
            >
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/ships"
              end
            >
              Ships
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/login"
              end
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/signup"
            >
              Signup
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
