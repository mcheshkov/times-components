import React from "react";
import { Text } from "react-native";
import styles from "./styles";

export const ThemeContext = React.createContext('regular');

const ThemeProvider = (props) => (
  <ThemeContext.Provider value='large'>
    {props.children}
  </ThemeContext.Provider>
);

export default ThemeProvider;
