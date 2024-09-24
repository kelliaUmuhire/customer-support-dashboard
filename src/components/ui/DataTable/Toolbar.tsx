import { FC } from "react";

interface ToolbarProps {
  entriesPerPage: number;
  setEntriesPerPage: (entries: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Toolbar: FC<ToolbarProps> = ({
  entriesPerPage,
  setEntriesPerPage,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="flex w-full items-center gap-5 bg-white p-4">
      <div className="flex items-center space-x-2 text-xs font-medium">
        <label htmlFor="entries">Show</label>
        <select
          id="entries"
          value={entriesPerPage}
          onChange={(e) => setEntriesPerPage(Number(e.target.value))}
          className="appearance-none rounded-md bg-gray-200 bg-[url('/icons/caret-down.svg')] bg-2 bg-[calc(100%-10px)] bg-no-repeat p-2 pr-4"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span>entries</span>
      </div>

      <div className="relative min-w-[70%] md:min-w-[50%] lg:min-w-[30%]">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-md border border-gray-300 py-2 pl-8 pr-4 text-xs font-medium"
        />
        <img
          src="/icons/search.svg"
          alt="Search Icon"
          className="pointer-events-none absolute left-0 top-2 pl-2"
        />
      </div>
    </div>
  );
};

export default Toolbar;
