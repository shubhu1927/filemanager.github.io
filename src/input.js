import React, { useState } from "react";

export const Input = ({ name = "", id, submit, cancel }) => {
  const [value, setValue] = useState(name);
  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      ></input>
      <span
        onClick={() => {
          submit(id, value);
          cancel();
        }}
      >
        ✔️
      </span>
      <span onClick={cancel}>✖️</span>
    </>
  );
};
