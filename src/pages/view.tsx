import { FC } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Title from "../components/ui/Title";
import Status from "../components/ui/Status";
import ResponseHistory from "../components/cards/ResponseHistory";
import InquiryResponseForm from "../components/forms/InquiryResponse";
import BackButton from "../components/ui/BackButton";
import { RootState, AppDispatch } from "../store";
import { addResponse } from "../store/inquirySlice";
import InfoItem from "../components/cards/InfoItem";

const Inquiry: FC = () => {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const { inquiries } = useSelector((state: RootState) => state.inquiry);
  const inquiry = inquiries.find((inquiry) => inquiry.id === `#${id}`);

  const onSubmitResponse = (newResponse: string) => {
    if (newResponse.trim() !== "" && id) {
      dispatch(addResponse({ inquiryId: `#${id}`, message: newResponse }));
    }
  };

  if (!inquiry) return <Navigate to="/" />;

  return (
    <div>
      <BackButton path="/" />
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
        <InfoItem title="Subject" content={inquiry.subject} className="pb-4" />
        <InfoItem title="Initial Message" content={inquiry.details.message} />
      </div>

      <ResponseHistory responses={inquiry.details.responses} />

      <InquiryResponseForm onSubmitResponse={onSubmitResponse} />
    </div>
  );
};

export default Inquiry;
