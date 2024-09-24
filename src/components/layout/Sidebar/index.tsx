import { FC } from "react";
import NavItem from "./NavItem";

interface SidebarProps {
  toggleSidebar: () => void;
}

const Sidebar: FC<SidebarProps> = ({ toggleSidebar }) => {
  return (
    <>
      <div
        className="fixed inset-0 z-10 hidden bg-black opacity-50"
        id="backdrop"
        onClick={toggleSidebar}
      ></div>
      <aside
        className="fixed z-10 hidden h-full w-4/5 bg-white p-8 shadow-sm md:w-1/2 lg:relative lg:block lg:w-1/5"
        id="sidebar"
      >
        <img
          src="/icons/close.svg"
          alt="Close"
          aria-label="Close Button"
          onClick={toggleSidebar}
          className="absolute right-8 top-10 cursor-pointer lg:hidden"
        />
        <h1 className="font-serif text-2xl font-bold text-teal-900">
          🐱‍🏍 Support
        </h1>
        <nav className="mt-16">
          <NavItem icon="inquiries" label="Inquiries" to="/" />
          <NavItem icon="reports" label="Reports" to="/reports" />
          <NavItem icon="settings" label="Settings" to="/settings" />
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
