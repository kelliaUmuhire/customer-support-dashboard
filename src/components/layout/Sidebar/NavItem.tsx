import { FC } from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  icon: string;
  label: string;
  to: string;
}

const NavItem: FC<NavItemProps> = ({ icon, label, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `my-4 flex items-center space-x-3 rounded-md p-3 text-sm font-medium tracking-wide text-gray-500 hover:bg-gray-100 ${
          isActive ? "bg-gray-100 font-semibold text-gray-600" : ""
        }`
      }
    >
      <img src={`/icons/${icon}.svg`} alt={label} />
      <span>{label}</span>
    </NavLink>
  );
};

export default NavItem;
