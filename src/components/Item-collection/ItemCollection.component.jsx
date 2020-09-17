import React from "react";

import AddIcon from "@material-ui/icons/Add";

import "./Item-collection.styles.css";

const ItemCollection = ({ cards, onClick }) => {
  return (
    <div className="card-container">
      {cards.map((card) => {
        return (
          <div className="grid-item" key={card.id}>
            <h3>{card.name}</h3>
            <img
              className="card-image"
              src={card.card_images["0"].image_url}
              alt=""
            />
            <ul style={{ listStyle: "none" }}>
              <li>Set: {card.card_prices["0"].tcgplayer_price}</li>
              <li>
                Card type: {card.race} {card.type}
              </li>
              <li>
                <a
                  href={`https://www.tcgplayer.com/search/yugioh/product?productUrlName=${card.name
                    .replace(" ", "%20")
                    .replace(",", "")}&productLineName=yugioh`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Purchase on Tcgplayer
                </a>
              </li>
            </ul>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span>Add to deck list</span>{" "}
              <AddIcon
                className="add-icon"
                fontSize="large"
                onClick={() => onClick(card)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCollection;
