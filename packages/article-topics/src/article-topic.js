import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import Link from "@times-components/link";
import { withTrackEvents } from "@times-components/tracking";
import styles from "./styles";

const ArticleTopic = ({ name, onPress, slug }) => (
  <View style={styles.spacer}>
    <Link onPress={e => onPress(e, { name, slug })} url={`/topic/${slug}`}>
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </Link>
  </View>
);

ArticleTopic.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired
};

export default withTrackEvents(ArticleTopic, {
  analyticsEvents: [
    {
      eventName: "onPress",
      actionName: "Pressed",
      trackingName: "TopicLink",
      getAttrs: ({ name, slug }) => ({
        name,
        slug
      })
    }
  ]
});
