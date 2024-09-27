import { FC, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Toolbar from "./Toolbar";
import Pagination from "./Pagination";
import Table from "./Table";
import { sortData } from "../../../util/helpers";
import { Inquiry } from "../../../util/api";

export interface SortConfig {
  key: string;
  direction: "ascending" | "descending";
}

interface DataTableProps {
  data: Inquiry[];
}

const DataTable: FC<DataTableProps> = ({ data }) => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "",
    direction: "ascending",
  });
  const [currentPage, setCurrentPage] = useState(() =>
    parseInt(new URLSearchParams(search).get("page") || "1")
  );
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(() => {
    if (!searchQuery) return data;
    return data.filter((inquiry) =>
      inquiry.customerName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [data, searchQuery]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;
    return sortData(filteredData, sortConfig.key, sortConfig.direction);
  }, [filteredData, sortConfig]);

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return sortedData.slice(start, start + entriesPerPage);
  }, [sortedData, currentPage, entriesPerPage]);

  const handleSort = (key: string) => {
    setSortConfig((prevConfig) => ({
      key,
      direction:
        prevConfig.key === key && prevConfig.direction === "ascending"
          ? "descending"
          : "ascending",
    }));
  };

  useEffect(() => {
    const query = new URLSearchParams(search);
    query.set("page", currentPage.toString());
    navigate({ search: query.toString() }, { replace: true });
  }, [currentPage]);

  return (
    <div className="overflow-x-auto bg-white p-4 shadow-sm">
      <Toolbar
        entriesPerPage={entriesPerPage}
        setEntriesPerPage={setEntriesPerPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Table
        data={currentData}
        sortConfig={sortConfig}
        handleSort={handleSort}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(sortedData.length / entriesPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default DataTable;
