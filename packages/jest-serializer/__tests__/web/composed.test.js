import React from "react";
import { StyleSheet, Text } from "react-native";
import renderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  minimalWebTransform,
  rnwTransform,
  stylePrinter
} from "../../src";

describe("The serializers should", () => {
  it("minimalise and create styles", () => {
    addSerializers(
      expect,
      compose(stylePrinter, minimalWebTransform, rnwTransform(["color"]))
    );

    const styles = StyleSheet.create({
      colored: {
        color: "red"
      },
      padded: {
        padding: 1
      }
    });

    const component = (
      <Text
        func={() => {}}
        style={[styles.colored, styles.padded]}
        undef={undefined}
      />
    );
    const tree = renderer.create(component);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
