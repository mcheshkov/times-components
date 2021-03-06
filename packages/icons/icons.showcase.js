/* eslint-disable react/prop-types */

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colours, fonts } from "@times-components/styleguide";
import * as Icons from "./src/icons";

const borderWidth = 1;
const borderColor = colours.functional.keyline;

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    margin: 20,
    borderLeftWidth: borderWidth,
    borderLeftColor: borderColor,
    borderTopWidth: borderWidth,
    borderTopColor: borderColor
  },
  icon: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: borderWidth,
    borderRightColor: borderColor,
    borderBottomWidth: borderWidth,
    borderBottomColor: borderColor
  },
  label: {
    paddingTop: 15,
    fontFamily: fonts.supporting
  }
});

const renderIcon = color => args => {
  const name = args[0];
  const Icon = args[1];

  return (
    <View key={name} style={styles.icon}>
      <Icon
        fillColour={color(`Icon ${name} fill`, Icon.defaultProps.fillColour)}
        height={50}
        strokeColour={color(
          `Icon ${name} strike`,
          Icon.defaultProps.strokeColour
        )}
        width={50}
      />
      <Text style={styles.label}>{name}</Text>
    </View>
  );
};

export default {
  name: "Primitives/Icons",
  children: [
    {
      type: "story",
      name: "Icons",
      component: ({ color }) => (
        <View style={styles.wrapper}>
          {Object.entries(Icons).map(renderIcon(color))}
        </View>
      )
    }
  ]
};
