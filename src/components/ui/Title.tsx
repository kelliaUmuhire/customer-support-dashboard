import { FC } from "react";

interface TitleProps {
  label: string;
  className?: string;
}

const Title: FC<TitleProps> = ({ label, className }) => {
  return <h1 className={`mb-6 text-2xl font-bold ${className}`}>{label}</h1>;
};

export default Title;
