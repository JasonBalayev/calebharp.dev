import React from "react";
import { Button } from "@nextui-org/react";

const BadgeCards = ({ cards }) => {
  return (
    <div className="flex flex-row flex-wrap">
      {cards.map((card) => (
        <div className="flex flex-row flex-wrap" key={card.name}>
          <Button className="m-2 flex flex-row items-center bg-gray-800 h-9">
            {card.image !== "" ? (
              <img
                src={card.image}
                alt={card.name}
                className="object-scale-down h-9 w-auto py-2 px-1"
              />
            ) : (
              <div></div>
            )}
            <p className="font-mono text-12 text-white py-2 px-1">
              {card.name}
            </p>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default BadgeCards;

{
  /* <div className="flex flex-row flex-wrap">
      {cards.map((card) => (
        <div className="flex flex-row flex-wrap">
          <Button
            key={card.name}
            className="m-2 flex flex-col items-center bg-gray-800 h-20 w-40"
            onClick={() => console.log(card.name)}
          >
            <div className="flex flex-row items-center justify-start">
              <img
                src={card.image}
                alt={card.name}
                className="object-scale-down h-9 w-auto py-2 px-1"
              />
              <p className="font-mono text-10 text-white py-2 px-1">
                {card.name}
              </p>
            </div>
              <Progress aria-label="Loading..." value={60} className="max-w-md h-1" />
          </Button>
        </div>
      ))}
    </div> */
}
