import React, { FC } from "react";

interface CardProps {
  amount: string | number; // Adjust the type accordingly
  title: string;
}

const Card: FC<CardProps> = ({ amount, title }) => {
  return (
    <div className="w-full rounded-lg shadow-md">
      <div className="bg-cream-base h-full border-2 border-black rounded-lg text-center py-2">
        <p className="font-bold text-md border-b border-black">{title}</p>
        <div className="flex flex-col">
          <p className="font-bold text-3xl">{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
