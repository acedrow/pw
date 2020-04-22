import React, { useState } from "react";

export const AppConsole = () => {
  const [value, setValue] = useState('');

  return(
    <form onSubmit={() => {
      event.preventDefault();
      console.log('console logged: ' + value);
      }}>
    <label>
      Name:
      <input type="text" value={value} onChange={() => {
        setValue(event.target.value)
        }} />
    </label>
    <input type="submit" value="Submit" />
  </form>
  )  
}

