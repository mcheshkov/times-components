import React from "react";
import AuthorArticlesNoImagesProvider from "./author-articles-no-images-base";

export default props => (
  <AuthorArticlesNoImagesProvider
    {...props}
    longSummaryLength={220}
    shortSummaryLength={220}
  />
);
