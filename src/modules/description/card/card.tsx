import React, { FC } from "react";

interface CardProps {
  description: string;
  title: string;
}

const Card: FC<CardProps> = ({ description, title }) => {
  return (
    <div className="w-full rounded-lg shadow-md">
      <div className="bg-cream-base h-full border-2 border-black rounded-lg text-center min-h-[150px]">
        <p className="font-bold text-md border-b border-black p-2">{title}</p>
        <div className="flex flex-col">
          <p className="p-4 text-sm text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
