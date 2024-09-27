import { FC } from "react";
import DataTable from "../components/ui/DataTable/";
import Title from "../components/ui/Title";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Inquiries: FC = () => {
  const { inquiries } = useSelector((state: RootState) => state.inquiry);

  return (
    <div>
      <Title label="Inquiries" />
      <DataTable data={inquiries} />
    </div>
  );
};

export default Inquiries;
