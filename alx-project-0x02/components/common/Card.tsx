import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
      <h2 className="text-xl font-bold mb-2 text-gray-500">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
