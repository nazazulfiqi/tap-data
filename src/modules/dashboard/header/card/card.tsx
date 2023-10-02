import React, { FC } from "react";

interface CardProps {
  amount: string | number; // Adjust the type accordingly
  title: string;
}

const Card: FC<CardProps> = ({ amount, title }) => {
  return (
    <div className="w-full rounded-lg shadow-md">
      <div className="bg-cream-base h-full border-2 border-black rounded-lg flex justify-between px-6 items-center gap-5 py-6">
        <p className="font-bold text-md">{title}</p>
        <div className="flex flex-col">
          <p className="font-bold text-2xl">{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
