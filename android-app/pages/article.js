import React from "react";
import PropTypes from "prop-types";
import { NativeModules } from "react-native";
import { Article } from "@times-components/pages";

const config = NativeModules.ReactConfig;
const { fetch } = NativeModules.NativeFetch;
const { track } = NativeModules.ReactAnalytics;
const {
  onArticlePress,
  onAuthorPress,
  onLinkPress,
  onVideoPress,
  onTopicPress
} = NativeModules.ArticleEvents;
const ArticlePageView = Article(config)(fetch);

const platformAdConfig = {
  adUnit: "d.thetimes.co.uk",
  networkId: "25436805",
  testMode: "", // from secret checkbox
  sectionId: "????", // from native
  sectionName: "News", // from native
  appVersion: "1.10", // from native
  operatingSystem: "android",
  operatingSystemVersion: "1.1.0", // from native
  cookieEid: "AAAA002920174", // from native
  cookieAcsTnl: "", // from native
  cookieIamTgt: "", // from native
  deviceId: "wer", // from native
  deviceIdHash: "wer", // from native
  environment: "", // prod, qa
  isLoggedIn: true, // from native
  platform: "mobile"
};

const ArticleView = ({ articleId }) => (
  <ArticlePageView
    articleId={articleId}
    analyticsStream={track}
    onArticlePress={onArticlePress}
    onAuthorPress={onAuthorPress}
    onLinkPress={onLinkPress}
    onVideoPress={onVideoPress}
    onTopicPress={onTopicPress}
    platformAdConfig={platformAdConfig}
  />
);

ArticleView.propTypes = {
  articleId: PropTypes.string.isRequired
};

export default ArticleView;
