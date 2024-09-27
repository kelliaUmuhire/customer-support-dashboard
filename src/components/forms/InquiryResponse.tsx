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

  const handleSubmitResponse = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (response) {
      onSubmitResponse(response);
      setResponse("");
    }
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter")
      handleSubmitResponse(e as unknown as React.FormEvent<HTMLFormElement>);
  };

  return (
    <div className="bg-white p-5 shadow-sm">
      <form onSubmit={handleSubmitResponse}>
        <textarea
          className="mb-4 w-full rounded-md border p-4 text-sm"
          rows={4}
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          onKeyDown={handleEnterKeyPress}
          placeholder="Type your response here..."
        ></textarea>
        <Button type="submit">Send Response</Button>
      </form>
    </div>
  );
};

export default InquiryResponseForm;
