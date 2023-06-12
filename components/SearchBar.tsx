"use client";

import { useState } from "react";
import { SearchManufacturer } from "./";

const SearchButton = () => {
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}></button>;
};

const SearchBar = () => {
  const [Manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={Manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm" />
      </div>
    </form>
  );
};

export default SearchBar;
