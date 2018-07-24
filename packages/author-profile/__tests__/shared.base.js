import React from "react";
import TestRenderer from "react-test-renderer";
import { iterator } from "@times-components/test-utils";
import { ApolloError } from "apollo-client";
import "./mocks";
import AuthorProfile from "../src/author-profile";

// eslint-disable-next-line global-require
jest.mock("@times-components/provider", () => require("./mock-provider"));

const author = {
  articles: {
    count: 28
  },
  biography: [
    {
      name: "text",
      attributes: {
        value: "Camilla Long"
      },
      children: []
    }
  ],
  hasLeadAssets: true,
  image: "https://image.io",
  jobTitle: "Job Title",
  name: "Name",
  twitter: "twitter"
};

export default () => {
  const tests = [
    {
      name: "an error page",
      test() {
        const testInstance = TestRenderer.create(
          <AuthorProfile
            analyticsStream={() => {}}
            error={new ApolloError("Some Error")}
            slug="some-slug"
          />
        );

        expect(testInstance).toMatchSnapshot();
      }
    },
    {
      name: "a loading state",
      test() {
        const testInstance = TestRenderer.create(
          <AuthorProfile
            analyticsStream={() => {}}
            author={author}
            isLoading
            page={1}
            slug="some-slug"
          />
        );

        expect(testInstance).toMatchSnapshot();
      }
    },
    {
      name: "an article list with images",
      test() {
        const testInstance = TestRenderer.create(
          <AuthorProfile
            analyticsStream={() => {}}
            author={author}
            isLoading={false}
            page={2}
            slug="some-slug"
          />
        );

        expect(testInstance).toMatchSnapshot();
      }
    },
    {
      name: "an article list without images",
      test() {
        const testInstance = TestRenderer.create(
          <AuthorProfile
            analyticsStream={() => {}}
            author={{ ...author, hasLeadAssets: false }}
            isLoading={false}
            pageSize={12}
            slug="some-slug"
          />
        );

        expect(testInstance).toMatchSnapshot();
      }
    },
    {
      name: "fetches more articles",
      test() {
        const testInstance = TestRenderer.create(
          <AuthorProfile
            analyticsStream={() => {}}
            author={author}
            isLoading={false}
            page={2}
            slug="some-slug"
          />
        );

        const articleList = testInstance.root.find(
          node => node.type === "ArticleList"
        );

        articleList.props.fetchMore(2);

        expect(testInstance).toMatchSnapshot();
      }
    },
    {
      name: "fetches more articles and falls back to previous data if no more",
      test() {
        const testInstance = TestRenderer.create(
          <AuthorProfile
            analyticsStream={() => {}}
            author={{ ...author, hasLeadAssets: false }}
            isLoading={false}
            page={2}
            slug="some-slug"
          />
        );

        const articleList = testInstance.root.find(
          node => node.type === "ArticleList"
        );

        articleList.props.fetchMore(2);

        expect(testInstance).toMatchSnapshot();
      }
    },
    {
      name: "an article list header",
      test() {
        const testInstance = TestRenderer.create(
          <AuthorProfile
            analyticsStream={() => {}}
            author={author}
            isLoading={false}
            page={2}
            slug="some-slug"
          />
        );

        const articleList = testInstance.root.find(
          node => node.type === "ArticleList"
        );

        const articleListHeader = TestRenderer.create(
          articleList.props.articleListHeader
        );

        expect(articleListHeader).toMatchSnapshot();
      }
    },
    {
      name: "an article list header with no bio, job title, name or twitter",
      test() {
        const testInstance = TestRenderer.create(
          <AuthorProfile
            analyticsStream={() => {}}
            author={{
              ...author,
              biography: null,
              jobTitle: null,
              name: null,
              twitter: null
            }}
            isLoading={false}
            page={2}
            slug="some-slug"
          />
        );

        const articleList = testInstance.root.find(
          node => node.type === "ArticleList"
        );

        const articleListHeader = TestRenderer.create(
          articleList.props.articleListHeader
        );

        expect(articleListHeader).toMatchSnapshot();
      }
    },
    {
      name: "an article list header loading",
      test() {
        const testInstance = TestRenderer.create(
          <AuthorProfile
            analyticsStream={() => {}}
            author={author}
            isLoading
            slug="some-slug"
          />
        );

        const articleList = testInstance.root.find(
          node => node.type === "ArticleList"
        );

        const articleListHeader = TestRenderer.create(
          articleList.props.articleListHeader
        );

        expect(articleListHeader).toMatchSnapshot();
      }
    },
    {
      name: "twitter link uses onTwitterLinkPress",
      test() {
        const onTwitterLinkPress = jest.fn();

        const testInstance = TestRenderer.create(
          <AuthorProfile
            analyticsStream={() => {}}
            author={author}
            isLoading={false}
            onTwitterLinkPress={onTwitterLinkPress}
            slug="some-slug"
          />
        );

        const articleList = testInstance.root.find(
          node => node.type === "ArticleList"
        );

        const articleListHeader = TestRenderer.create(
          articleList.props.articleListHeader
        );

        const twitterLink = articleListHeader.root.find(
          node => node.props.testID === "twitterLink"
        );

        twitterLink.props.onPress("event");

        expect(onTwitterLinkPress.mock.calls).toMatchSnapshot();
      }
    }
  ];

  jest.useFakeTimers();

  iterator(tests);
};
