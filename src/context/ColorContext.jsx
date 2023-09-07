import React, { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [color, setColor] = useState("white");

  const value = useMemo(() => ({ color, setColor }), [color, setColor]);

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
}

export const useColor = () => {
  return useContext(ColorContext);
};

ColorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
