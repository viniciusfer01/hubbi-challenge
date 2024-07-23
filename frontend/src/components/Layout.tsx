import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const RootLayout = () => {
  return (
    <div className="min-h-screen h-auto bg-stars pb-5">
      <MainNavigation />
      <div className="max-w-5xl py-12 m-auto text-center mt-14 p-8 max-h-3xl bg-black/80 rounded-md">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
