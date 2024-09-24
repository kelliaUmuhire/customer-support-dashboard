import { Dispatch, FC, SetStateAction } from "react";
import { useMemo, useState } from "react";
import Toolbar from "./Toolbar";
import Pagination from "./Pagination";
import { sortData } from "../../../util/helpers";
import Table from "./Table";
import { Inquiry } from "../../../util/api";

export interface SortConfig {
  key: string;
  direction: string;
}

interface DataTableProps {
  data: Inquiry[];
  setData: Dispatch<SetStateAction<Inquiry[]>>;
}

const DataTable: FC<DataTableProps> = ({ data, setData }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "",
    direction: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(
    () =>
      data.filter(
        (inquiry) =>
          inquiry.customerName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          inquiry.subject.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [data, searchQuery]
  );

  const handleSort = (key: string) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "ascending"
        ? "descending"
        : "ascending";
    setData(sortData(data, key, direction));
    setSortConfig({ key, direction });
  };

  // Memoize total pages calculation
  const totalPages = useMemo(
    () => Math.ceil(data.length / entriesPerPage),
    [data.length, entriesPerPage]
  );

  // Get current page data
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return filteredData.slice(start, start + entriesPerPage);
  }, [filteredData, currentPage, entriesPerPage]);

  return (
    <div className="overflow-x-auto bg-white p-4 shadow-sm">
      <Toolbar
        {...{ entriesPerPage, setEntriesPerPage, searchQuery, setSearchQuery }}
      />
      <Table
        data={currentData}
        sortConfig={sortConfig}
        handleSort={handleSort}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default DataTable;
