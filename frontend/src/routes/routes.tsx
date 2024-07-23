import { createBrowserRouter } from "react-router-dom";
import Characters from "../pages/Characters";
import ErrorPage from "../pages/Error";
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import RootLayout from "../pages/Root";
import ShipDetail from "../pages/shipDetails";
import Ships from "../pages/ships";
import Signup from "../pages/Signup";
import { tokenLoader, checkAuthLoader } from "../util/auth";
import CharacterDetails from "../pages/CharacterDetails";
import { action as authAction } from "../util/action";
import { action as logoutAction } from "../pages/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/characters", element: <Characters /> },
      {
        path: "/characters/:id",
        element: <CharacterDetails />,
        loader: checkAuthLoader,
      },
      { path: "/ships", element: <Ships /> },
      { path: "/ships/:id", element: <ShipDetail />, loader: checkAuthLoader },
      { path: "/login", element: <Login />, action: authAction },
      { path: "/signup", element: <Signup />, action: authAction },
      { path: "logout", action: logoutAction },
    ],
  },
]);

export default router;
