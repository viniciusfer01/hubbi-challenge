import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Characters from "./pages/characters";
import Ships from "./pages/ships";
import ShipDetail from "./pages/shipDetails";
import HomePage from "./pages/Home";
import Login from "./pages/login";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/characters", element: <Characters /> },
      { path: "/ships", element: <Ships /> },
      { path: "/ships/:id", element: <ShipDetail /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Login /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
