import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Characters from "./pages/characters";
import Ships from "./pages/ships";
import ShipDetail from "./pages/shipDetails";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import Signup from "./pages/Signup";
import { action as signupAction } from "./pages/Signup";
import { action as loginAction } from "./pages/Login";
import { action as logoutAction } from "./pages/Logout";
import { checkAuthLoader, tokenLoader } from "./util/auth";

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
      { path: "/ships", element: <Ships /> },
      { path: "/ships/:id", element: <ShipDetail />, loader: checkAuthLoader },
      { path: "/login", element: <Login />, action: loginAction },
      { path: "/signup", element: <Signup />, action: signupAction },
      { path: "logout", action: logoutAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
