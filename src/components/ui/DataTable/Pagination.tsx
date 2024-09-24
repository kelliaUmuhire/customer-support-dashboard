import { FC } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () =>
    Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={`flex size-8 items-center justify-center rounded-lg text-sm font-medium ${
          currentPage === page
            ? "bg-teal-900 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        {page}
      </button>
    ));

  return (
    <div className="flex items-center justify-center gap-3 rounded-lg p-4 text-xs font-medium">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
