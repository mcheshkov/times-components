import React from "react";
import { Text } from "react-native";
import { ThemeContext } from "./theme-provider";

const ThemeConsumer = (props) => {
  console.log(props);
  return (
    <ThemeContext.Consumer>
      {theme => <Text>Jam jam</Text>}
    </ThemeContext.Consumer>
  )
}

export default ThemeConsumer;
