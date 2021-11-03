import { useState } from "react";

function Search() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      title="testSearch"
    />
  );
}

export default Search;
