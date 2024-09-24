import { FC } from "react";
import { Navigate } from "react-router-dom";
import DataTable from "../components/ui/DataTable/";
import Title from "../components/ui/Title";
import useInquiries from "../hooks/useInquiries";

const Inquiries: FC = () => {
  const { loading, data, error, setData } = useInquiries();

  if (error) return <Navigate to="/error" />;

  return (
    <div>
      <Title label="Inquiries" />
      {loading ? (
        <p className="text-sm font-medium text-slate-600">Loading...</p>
      ) : (
        <DataTable data={data} setData={setData} />
      )}
    </div>
  );
};

export default Inquiries;
