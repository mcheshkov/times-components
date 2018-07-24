import React from "react";
import TestRenderer from "react-test-renderer";
import { iterator } from "@times-components/test-utils";
import "./mocks";
import AuthorProfile from "../src/author-profile";

// eslint-disable-next-line global-require
jest.mock("@times-components/provider", () => require("./mock-loading-provider"));

export default () => {
  const tests = [
    {
      name: "an article list loading with images",
      test() {
        const testInstance = TestRenderer.create(
          <AuthorProfile
            analyticsStream={() => {}}
            isLoading
            slug="some-slug"
          />
        );

        expect(testInstance).toMatchSnapshot();
      }
    },
    {
      name: "an article list loading without images",
      test() {
        const testInstance = TestRenderer.create(
          <AuthorProfile
            analyticsStream={() => {}}
            isLoading
            slug="some-slug"
          />
        );

        expect(testInstance).toMatchSnapshot();
      }
    }
  ];

  iterator(tests);
};
