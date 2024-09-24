import { FC } from "react";

interface ButtonProps {
  children: string;
}

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      className="rounded-lg bg-teal-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-teal-900"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
