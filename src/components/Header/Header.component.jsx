import { Navigation } from "@material-ui/icons";
import React from "react";

import "./Header.styles.css";

const Header = ({ cardCollection, header, total }) => {
  console.log(cardCollection, header, total);

  return header ? (
    <div>
      <h1>{header}</h1>
      <div id="navigation">
        <button className="back-to-top" onClick={() => window.scrollTo(0, 0)}>
          Back to top
        </button>
        <h3>Collection total: ${total}</h3>
        <h3>Cards in collection: {cardCollection.length}</h3>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Header;
