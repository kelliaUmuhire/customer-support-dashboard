import { FC } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

const DefaultLayout: FC = () => {
  const toggleSidebar = () => {
    document.getElementById("sidebar")?.classList.toggle("hidden");
    document.getElementById("backdrop")?.classList.toggle("hidden");
  };

  return (
    <div className="flex h-screen bg-slate-50 font-montserrat">
      <Sidebar toggleSidebar={toggleSidebar} />

      <main className="w-auto flex-1 overflow-y-auto p-8">
        <Topbar toggleSidebar={toggleSidebar} />
        <div className="mt-16">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
