import { FC } from "react";
import { SortConfig } from ".";

interface SortIconProps {
  name: string;
  sortConfig: SortConfig;
}

const SortIcon: FC<SortIconProps> = ({ name, sortConfig }) => {
  if (sortConfig.key === name) {
    return (
      <img
        src="/icons/caret-down.svg"
        className={`size-2.5 ${
          sortConfig.direction === "ascending" ? "rotate-180" : ""
        }`}
      />
    );
  }

  return <img src="/icons/sort.svg" />;
};

export default SortIcon;
