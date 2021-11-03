import { useState } from "react";

function Button() {
  const [value, setValue] = useState("Click Here");

  const newFunction = () => {
    setValue("You Clicked");
  };

  return (
    <button onClick={newFunction} title="testButton">
      {value}
    </button>
  );
}

export default Button;
