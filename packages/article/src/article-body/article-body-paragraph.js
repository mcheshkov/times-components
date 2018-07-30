import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "../styles/article-body";
import ArticleThemeContext from "../article-theme"

const BodyParagraph = props => (
  <ArticleThemeContext.Consumer>
    {theme =>
      <View
        key={`paragraph-${props.uid}`}
        style={[styles.articleMainContentRow]}
        testID={`paragraph-${props.uid}`}
      >
        <Text style={styles(theme.scale).articleTextElement}>{props.children}</Text>
      </View>
    }
  </ArticleThemeContext.Consumer>
);

BodyParagraph.propTypes = {
  uid: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  ).isRequired
};

export default BodyParagraph;
