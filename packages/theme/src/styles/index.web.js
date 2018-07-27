import { StyleSheet } from "react-native";
import sharedStyles from "./shared";

const styles = StyleSheet.create({
  ...sharedStyles,
  ThemeBody: {
    ...sharedStyles.ThemeBody,
    color: "blue"
  }
});

export default styles;
