import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <div className="bg-gun-metal h-screen">
      <MainNavigation />
      <div className="max-w-5xl my-12 m-auto text-center p-8 max-h-3xl bg-ash-gray rounded-md">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
