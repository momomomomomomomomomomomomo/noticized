"use client";
import { useEffect, useState } from "react";
import Card from "./Card"; // Assuming your Card component is in the same folder
import { useSearching } from "./SearchingContext";

export default function CardList() {
  const { currentCardList, cardList } = useSearching();
  const [flippedCardId, setFlippedCardId] = useState(null);

  const handleCardClick = (itemId) => {
    setFlippedCardId((prevId) => (prevId === itemId ? null : itemId));
  };

  return cardList.length === 0 ? (
    <h2 className="text-center text-2xl text-emerald-500">
      There is no Notes, Start adding Some!
    </h2>
  ) : currentCardList.length === 0 ? (
    <h2 className="text-center text-2xl text-emerald-500">
      Try different Words!
    </h2>
  ) : (
    <div className="grid grid-cols-2  place-items-center gap-7 w-full  pb-20 sm:grid-cols-3 lg:grid-cols-4 lg:gap-8 xl:gap-9 2xl:gap-9">
      {currentCardList.map((item) => (
        <Card
          key={item.id}
          item={item}
          isFlipped={flippedCardId === item.id}
          onCardClick={handleCardClick}
        />
      ))}
    </div>
  );
}
