import React from "react";
import { View } from "react-native";
import get from "lodash.get";
import ArticleSummary, {
  ArticleSummaryContent,
  ArticleSummaryHeadline
} from "@times-components/article-summary";
import Card from "@times-components/card";
import Link from "@times-components/link";
import { colours } from "@times-components/styleguide";
import {
  relatedArticleItemPropTypes,
  relatedArticleItemDefaultProps
} from "./related-article-item-prop-types";
import styles from "./styles";

const RelatedArticleItem = ({
  article,
  bylineClass,
  contentContainerClass,
  headlineClass,
  imageConfig,
  imageContainerClass,
  isOpinionByline,
  isReversed,
  onPress,
  showImage,
  showSummary,
  summaryConfig
}) => {
  const {
    byline,
    headline,
    label,
    leadAsset,
    publishedTime,
    section,
    url
  } = article;
  const {
    lengths: summaryLengths = [],
    style: summaryStyle = {},
    type: summaryType
  } = summaryConfig;
  const {
    cropSize = "169",
    imageRatio = 16 / 9,
    style: imageStyle = {}
  } = imageConfig;

  const imageUri = leadAsset.posterImage
    ? get(article, `leadAsset.posterImage.crop${cropSize}.url`)
    : get(article, `leadAsset.crop${cropSize}.url`);

  return (
    <Link onPress={e => onPress(e, { url: article.url })} url={url}>
      <Card
        contentContainerClass={contentContainerClass}
        image={{ uri: imageUri }}
        imageContainerClass={imageContainerClass}
        imageRatio={imageRatio}
        imageStyle={imageStyle}
        isReversed={isReversed}
        showImage={showImage}
      >
        <ArticleSummary
          bylineProps={{
            ast: byline,
            bylineClass,
            bylineStyle: isOpinionByline ? styles.opinionByline : styles.byline,
            color: colours.section[section] || colours.section.default,
            isOpinionByline
          }}
          content={() =>
            showSummary && (
              <View style={summaryStyle}>
                {summaryLengths.map(item => {
                  const summaryClassSuffix = `${item}Class`;
                  const summaryClass = summaryType
                    ? `${summaryType}Summary`
                    : `summary`;
                  return (
                    <ArticleSummaryContent
                      ast={article[`summary${item}`]}
                      className={`summaryHidden ${summaryClass}${
                        summaryClassSuffix
                      }`}
                      key={item}
                    />
                  );
                })}
              </View>
            )
          }
          datePublicationProps={{ date: publishedTime, showDay: false }}
          headline={() => (
            <ArticleSummaryHeadline
              className={headlineClass}
              headline={headline}
              style={styles.headline}
            />
          )}
          labelProps={{
            color: colours.section[section] || colours.section.default,
            isVideo: leadAsset && leadAsset.type === "Video",
            title: label
          }}
        />
      </Card>
    </Link>
  );
};

RelatedArticleItem.propTypes = relatedArticleItemPropTypes;
RelatedArticleItem.defaultProps = relatedArticleItemDefaultProps;

export default RelatedArticleItem;
