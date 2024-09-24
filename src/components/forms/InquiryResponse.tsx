import { FC } from "react";
import { useState } from "react";
import Button from "../ui/Button";

interface InquiryResponseFormProps {
  onSubmitResponse: (response: string) => void;
}

const InquiryResponseForm: FC<InquiryResponseFormProps> = ({
  onSubmitResponse,
}) => {
  const [response, setResponse] = useState("");

  const handleSubmitResponse = (e) => {
    e.preventDefault();
    onSubmitResponse(response);
    setResponse("");
  };

  return (
    <div className="bg-white p-5 shadow-sm">
      <h3 className="mb-4 font-semibold">Add Response</h3>
      <form onSubmit={handleSubmitResponse}>
        <textarea
          className="mb-4 w-full rounded-md border p-4 text-sm"
          rows={4}
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          placeholder="Type your response here..."
        ></textarea>
        <Button type="submit">Send Response</Button>
      </form>
    </div>
  );
};

export default InquiryResponseForm;
