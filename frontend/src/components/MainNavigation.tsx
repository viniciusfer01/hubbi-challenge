import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

const MainNavigation = () => {
  const token = useRouteLoaderData("root");

  return (
    <header className="p-8 bg-battleship-gray text-3xl font-sans text-yellow">
      <nav>
        <ul className="flex justify-between gap-4 space-x-3">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : undefined)}
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : undefined)}
              to="/characters"
              end
            >
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : undefined)}
              to="/ships"
              end
            >
              Ships
            </NavLink>
          </li>
          {!token && (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "underline" : undefined
                  }
                  to="/login"
                  end
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "underline" : undefined
                  }
                  to="/signup"
                >
                  Signup
                </NavLink>
              </li>
            </>
          )}
          {token && (
            <li>
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
