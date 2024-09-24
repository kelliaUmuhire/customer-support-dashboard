import { FC } from "react";
import { Response } from "../../util/api";

interface ResponseHistoryProps {
  responses: Response[];
}

const ResponseHistory: FC<ResponseHistoryProps> = ({ responses }) => {
  return (
    <div className="my-3 bg-white p-5 shadow-sm">
      <h3 className="mb-4 font-semibold">Response History</h3>
      <div className="space-y-4">
        {responses.map(({ message, responseDate }, index) => (
          <div key={index} className="flex items-start">
            <img
              src="/icons/message-square.svg"
              className="mr-3"
              alt="Message Icon"
            />
            <div className="flex-grow">
              <p className="mb-1 text-xs text-gray-500">
                {new Date(responseDate).toLocaleString()}
              </p>
              <p className="text-sm text-gray-800">{message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponseHistory;
