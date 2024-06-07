import React, { useState } from "react";
import SearchBar from "react-search-bar";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const data = [
    { id: 1, name: 'Apple iPhone 12' },
    { id: 2, name: 'Samsung Galaxy S21' },
    { id: 3, name: 'Google Pixel 5' },
    // Add more products here
  ];
  var container=data

  const handleSearch = (data) => {
    // Filter the data based on the search value
    const filteredData = data.filter((item) =>
      item.name.includes(searchValue)
    );

    // Display the filtered results
    // ...
  };

  return (
    <SearchBar
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onSearch={()=>handleSearch(container)}
    />
  );
};

export default Searchbar;