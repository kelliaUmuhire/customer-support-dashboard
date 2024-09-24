import { FC } from "react";
import { Link } from "react-router-dom";
import { inquiryColumns } from "../../../data/table";
import SortIcon from "./SortIcon";
import Status from "../Status";
import { SortConfig } from ".";
import { Inquiry } from "../../../util/api";

interface TableProps {
  data: Inquiry[];
  sortConfig: SortConfig;
  handleSort: (key: string) => void;
}

const Table: FC<TableProps> = ({ data, sortConfig, handleSort }) => {
  return (
    <table className="min-w-full table-auto">
      <thead className="text-sm font-bold">
        <tr>
          {inquiryColumns.map(({ key, className, sortable, label }) => (
            <th
              key={key}
              className={className}
              onClick={sortable ? () => handleSort(key) : undefined}
            >
              {sortable ? (
                <div className="flex items-center justify-between">
                  <span>{label}</span>
                  <SortIcon name={key} sortConfig={sortConfig} />
                </div>
              ) : (
                label
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.id}
            className={`text-sm font-medium ${
              index % 2 === 0 ? "bg-violet-50/50" : "bg-inherit"
            }`}
          >
            <td className="p-4 text-center">{item.id}</td>
            <td className="p-4">{item.customerName}</td>
            <td className="p-4">{item.date}</td>
            <td className="p-4">
              <Status status={item.status} />
            </td>
            <td className="p-4 text-center">
              <Link to={`/view/${item.id.slice(1)}`} state={item}>
                <img
                  src="/icons/edit.svg"
                  alt="Edit"
                  className="inline-block size-6 cursor-pointer"
                  aria-label="Edit Link"
                />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
