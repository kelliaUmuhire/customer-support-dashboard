import { FC } from "react";

interface TopbarProps {
  toggleSidebar: () => void;
}

const Topbar: FC<TopbarProps> = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between">
      <div className="hidden lg:block"></div>
      <img
        src="/icons/menu.svg"
        alt="Menu"
        className="lg:hidden"
        aria-label="Show Sidebar"
        onClick={toggleSidebar}
      />
      <div className="flex items-center space-x-8">
        <img
          src="/icons/bell.svg"
          className="cursor-pointer"
          alt="Notifications"
        />
        <div className="flex items-center space-x-2">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg"
            alt="User avatar"
            className="size-8 rounded-full"
          />
          <span className="text-sm font-medium">Bob Torres</span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
