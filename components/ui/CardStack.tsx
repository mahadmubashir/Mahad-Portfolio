"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type Card = {
  id: number;
  title: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  const handleCardClick = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards]; // create a copy of the array
      newArray.unshift(newArray.pop()!); // move the last element to the front
      return newArray;
    });
  };

  return (
    <div
      className="relative h-60 w-60 md:h-96 md:w-96"
      onClick={handleCardClick}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-gray-800 h-60 w-60 md:h-96 md:w-96 rounded-3xl p-4 shadow-xl border border-gray-700 flex flex-col justify-between text-white overflow-hidden md:col-span-2"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
            zIndex: cards.length - index, // decrease z-index for the cards that are behind
          }}
        >
          <div
            className={cn(
              "relative border text-white flex items-center justify-center w-full h-full text-sm antialiased"
            )}
          >
            {card.content}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
