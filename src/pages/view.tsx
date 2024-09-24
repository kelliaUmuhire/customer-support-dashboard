import { FC, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Title from "../components/ui/Title";
import Status from "../components/ui/Status";
import ResponseHistory from "../components/cards/ResponseHistory";
import InquiryResponseForm from "../components/forms/InquiryResponse";
import { Inquiry as InquiryType } from "../util/api";

const Inquiry: FC = () => {
  const { state } = useLocation();
  const [inquiry, setInquiry] = useState<InquiryType>(() => state);

  const onSubmitResponse = (newResponse: string) => {
    setInquiry((prev) => ({
      ...prev,
      details: {
        ...prev.details,
        responses: [
          ...prev.details.responses,
          { message: newResponse, responseDate: new Date().toISOString() },
        ],
      },
    }));
  };

  if (!state) return <Navigate to="/" />;

  return (
    <div>
      <Title label="Inquiry Details" />
      <div className="bg-white p-5 shadow-sm">
        <div className="mb-4 flex flex-col items-start justify-between lg:flex-row">
          <h2 className="text-xl font-semibold">{inquiry.customerName}</h2>
          <div className="mt-2 lg:mt-0 lg:text-right">
            <p className="mb-2 text-xs font-medium text-gray-600">
              Inquiry Date: {new Date(inquiry.date).toLocaleDateString()}
            </p>
            <Status status={inquiry.status} />
          </div>
        </div>
        <div className="border-t py-4">
          <h3 className="mb-2 font-semibold">Subject</h3>
          <p className="text-sm">{inquiry.subject}</p>
        </div>
        <div className="border-t pt-4">
          <h3 className="mb-2 font-semibold">Initial Message</h3>
          <p className="text-sm">{inquiry.details.message}</p>
        </div>
      </div>

      <ResponseHistory responses={inquiry.details.responses} />

      <InquiryResponseForm onSubmitResponse={onSubmitResponse} />
    </div>
  );
};

export default Inquiry;
