import { FC } from "react";

interface InfoItemProps {
  title: string;
  content: string;
  className?: string;
}

const InfoItem: FC<InfoItemProps> = ({ title, content, className }) => {
  return (
    <div className={`border-t pt-4 ${className}`}>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p className="text-sm">{content}</p>
    </div>
  );
};

export default InfoItem;
