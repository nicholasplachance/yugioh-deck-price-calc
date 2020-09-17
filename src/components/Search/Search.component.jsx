import React from "react";

const Search = ({ state, onClick, onChange }) => {
  console.log(onClick);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form>
        <input
          type="text"
          className="search-box"
          placeholder={state.header}
          onChange={onChange}
        />
      </form>
      <div className="option-menu" style={{ marginTop: "25px" }}>
        <h6 style={{ margin: "0" }}>Select a Category</h6>
        <ul className="option-content">
          {state.options.map((option) => (
            <li
              className="option"
              key={option.url}
              onClick={(e) => onClick(option)}
            >
              {option.header.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
