import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

const MainNavigation = () => {
  const token = useRouteLoaderData("root");

  const logoutButtonRender = () => {
    if (token) {
      return (
        <Form action="/logout" method="post">
          <button>Logout</button>
        </Form>
      );
    }
    return null;
  };

  return (
    <header className="w-full bg-black p-8 ">
      <nav>
        <div className="flex justify-between gap-4 space-x-3 text-yellow text-4xl items-center">
          <NavLink
            className={({ isActive }) => (isActive ? "underline" : undefined)}
            to="/"
            end
          >
            <img
              src="Star_Wars_Logo.svg"
              alt="Star Wars Logo"
              className="h-16 m-0 p-0"
            />
          </NavLink>

          <div className="flex space-x-4">
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : undefined)}
              to="/characters"
              end
            >
              Characters
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "underline" : undefined)}
              to="/ships"
              end
            >
              Ships
            </NavLink>

            {!token && (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "underline" : undefined
                  }
                  to="/login"
                  end
                >
                  Login
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive ? "underline" : undefined
                  }
                  to="/signup"
                >
                  Signup
                </NavLink>
              </>
            )}
            {logoutButtonRender()}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
