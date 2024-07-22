import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <div className="bg-black h-screen text-yellow-300">
      <MainNavigation />
      <Outlet />
    </div>
  );
};

export default RootLayout;
