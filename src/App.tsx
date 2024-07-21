import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Characters from "./pages/characters";
import Ships from "./pages/ships";
import ShipDetail from "./pages/shipDetails";
import HomePage from "./pages/Home";
import Login from "./pages/login";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/characters", element: <Characters /> },
  { path: "/ships", element: <Ships /> },
  { path: "/shipDetails", element: <ShipDetail /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Login /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
