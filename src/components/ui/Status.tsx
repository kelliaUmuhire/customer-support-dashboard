import { FC } from "react";

interface StatusProps {
  status: string;
}

const Status: FC<StatusProps> = ({ status }) => {
  const getStatusStyle = () => {
    switch (status) {
      case "Open":
        return "bg-green-50 text-green-600";
      case "Pending":
        return "bg-orange-50 text-orange-600";
      case "Closed":
        return "bg-red-50 text-red-600";
      default:
        return "";
    }
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-2 text-xs font-medium ${getStatusStyle()}`}
    >
      {status}
    </span>
  );
};

export default Status;
