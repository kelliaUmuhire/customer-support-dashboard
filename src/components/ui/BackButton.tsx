import { FC, ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  path: string;
}

const BackButton: FC<BackButtonProps> = ({ path, ...rest }) => {
  const navigate = useNavigate();
  return (
    <button
      className="flex items-center mb-6"
      onClick={() => navigate(path)}
      {...rest}
    >
      <img src="/icons/back.svg" alt="Back" className="size-3 mr-2" />
      <span className="text-gray-600 text-sm font-medium">Back</span>
    </button>
  );
};

export default BackButton;
