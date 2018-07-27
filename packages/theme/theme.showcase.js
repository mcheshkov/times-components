import React from "react";
import { Text } from "react-native";
import ThemeProvider from "./src/theme-provider";
import ThemeConsumer from "./src/theme-consumer";

export default {
  name: "Theme",
  children: [
    {
      type: "story",
      name: "Theme Provider",
      component: () => (
        <ThemeProvider>
          <Text>Jimbo</Text>
        </ThemeProvider>
      )
    },
    {
      type: "story",
      name: "Theme Consumer",
      component: () => (
        <ThemeConsumer>
          <Text>Jimbo</Text>
        </ThemeConsumer>
      )
    }
  ]
};
