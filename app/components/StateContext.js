import React, { useContext, useState } from "react";

const ColorsContext = React.createContext();

function useColors() {
  return useContext(ColorsContext);
}

function StateProvider({ children }) {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <ColorsContext.Provider
      value={{ red, setRed, green, setGreen, blue, setBlue }}
    >
      {children}
    </ColorsContext.Provider>
  );
}

export { useColors, StateProvider };
