import React, { useEffect, useMemo, useState } from "react";
import Toolbar from "./Toolbar";
import Pagination from "./Pagination";
import Table from "./Table";
import { sortData } from "../../../util/helpers";
import { Inquiry } from "../../../util/api";
import useQueryParams from "../../../hooks/useQueryParams";

export interface SortConfig {
  key: string;
  direction: "ascending" | "descending";
}

interface DataTableProps {
  data: Inquiry[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const { query, setQueryParams } = useQueryParams();

  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "",
    direction: "ascending",
  });
  const [searchQuery, setSearchQuery] = useState(
    () => query.get("search") || ""
  );
  const [entriesPerPage, setEntriesPerPage] = useState(() =>
    parseInt(query.get("entries") || "2")
  );
  const [urlPage, setUrlPage] = useState(() =>
    parseInt(query.get("page") || "1")
  );
  const [displayPage, setDisplayPage] = useState(() =>
    searchQuery ? 1 : urlPage
  );

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
    const start = (displayPage - 1) * entriesPerPage;
    return sortedData.slice(start, start + entriesPerPage);
  }, [sortedData, displayPage, entriesPerPage]);

  const handleSort = (key: string) => {
    setSortConfig((prevConfig) => ({
      key,
      direction:
        prevConfig.key === key && prevConfig.direction === "ascending"
          ? "descending"
          : "ascending",
    }));
  };

  const handleSearchOrEntriesChange = (
    field: string,
    value: string | number
  ) => {
    if (field === "search") {
      setSearchQuery(value as string);
      setDisplayPage(1);
    } else if (field === "entries") {
      setEntriesPerPage(value as number);
      handlePageChange(1);
    }
  };

  const handlePageChange = (newPage: number) => {
    setDisplayPage(newPage);
    setUrlPage(newPage);
  };

  useEffect(() => {
    setQueryParams({
      page: urlPage.toString(),
      entries: entriesPerPage.toString(),
      search: searchQuery,
    });
  }, [urlPage, searchQuery, entriesPerPage]);

  return (
    <div className="overflow-x-auto bg-white p-4 shadow-sm">
      <Toolbar
        entriesPerPage={entriesPerPage}
        searchQuery={searchQuery}
        onValueChange={handleSearchOrEntriesChange}
      />
      <Table
        data={currentData}
        sortConfig={sortConfig}
        handleSort={handleSort}
      />
      <Pagination
        currentPage={displayPage}
        totalPages={Math.ceil(sortedData.length / entriesPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default DataTable;
