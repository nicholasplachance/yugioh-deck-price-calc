import React from "react";

import ItemCollection from "../Item-collection/ItemCollection.component";

const CardCollection = ({ cards, onClick }) => {
  return <ItemCollection cards={cards} onClick={onClick} />;
};

export default CardCollection;
