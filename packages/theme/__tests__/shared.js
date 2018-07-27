import React from "react";
import TestRenderer from "react-test-renderer";
import Theme from "../src/theme";

export default () => {
  it("renders correctly", () => {
    const testInstance = TestRenderer.create(
      <Theme />
    );

    expect(testInstance.toJSON()).toMatchSnapshot();
  });
};
