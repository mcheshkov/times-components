import React from "react";
import { View } from "react-native";
import Caption from "@times-components/caption";
import withResponsiveStyles from "@times-components/responsive-styles";
import { spacing } from "@times-components/styleguide";

const InsetCaptionStyle = withResponsiveStyles(View, {
  base: () => `padding-left: ${spacing(2)};`,
  mediumUp: () => "padding-left: 0px;"
});

const InsetCaptionWeb = props => (
  <InsetCaptionStyle>
    <Caption credits={props.credits} text={props.caption} />
  </InsetCaptionStyle>
);

InsetCaptionWeb.propTypes = {
  ...Caption.propTypes
};

InsetCaptionWeb.defaultProps = {
  ...Caption.defaultProps
};

export default InsetCaptionWeb;
