import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      className={styles.searchBox}
      type="text"
      placeholder="Find contacts by name"
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBox;
