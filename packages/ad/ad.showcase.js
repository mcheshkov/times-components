/* eslint-env browser */
/* eslint-disable react/prop-types */
import React from "react";
import { Text, View } from "react-native";
import AdPlaceholder from "./src/ad-placeholder";
import Ad, { AdComposer } from "./src/ad";
import adConfig from "./fixtures/article-ad-config.json";

const placeholderSizes = ["default", "small", "mpu", "billboard"];

const renderAdPlaceholder = size => {
  if (size === placeholderSizes[1])
    return <AdPlaceholder height={90} width={728} />;
  if (size === placeholderSizes[2])
    return <AdPlaceholder height={250} width={300} />;
  if (size === placeholderSizes[3])
    return <AdPlaceholder height={250} width={970} />;

  return <AdPlaceholder height={50} width={700} />;
};

const withOpenInNewWindow = children => {
  const link = typeof document === "object" &&
    window !== window.top && (
      <a
        href={`/iframe.html${window.top.location.search}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        Open in new window
      </a>
    );

  return (
    <View>
      {link}
      <Text>Ads should show beneath this text.</Text>
      <AdComposer adConfig={adConfig}>
        {children}
      </AdComposer>
      <Text>Ads should show above this text.</Text>
    </View>
  );
};

const slotNames = [
  "intervention",
  "header",
  "pixel",
  "pixelteads",
  "pixelskin"
];

const articleContextURL =
  "https://www.thetimes.co.uk/edition/news/france-defies-may-over-russia-37b27qd2s";

const renderAd = slotName => (
  <View>
    {slotName.indexOf("pixel") !== -1 && (
      <Text style={{ display: "block" }}>
        The pixel ad is below. It&rsquo;s invisible.
      </Text>
    )}
    <Ad contextUrl={articleContextURL} section="news" slotName={slotName} />
  </View>
);

export default {
  name: "Primitives/Advertisement",
  children: [
    {
      type: "story",
      name: "Placeholder - Variable Sizes",
      component: ({ selectV2 }) =>
        renderAdPlaceholder(
          selectV2(
            "Size of ad placeholder:",
            placeholderSizes,
            placeholderSizes[0]
          )
        )
    },
    {
      type: "story",
      name: "Ad Loading State",
      component: () =>
        <AdComposer adConfig={adConfig}>
          <Ad
            contextUrl={articleContextURL}
            isLoading
            section="news"
            slotName="header"
          />
        </AdComposer>
    },
    {
      type: "story",
      name: "Ad Blocked For Brand Protection",
      component: () => {
        const brandProtectedAdConfig = {
          ...adConfig,
          pageTargeting: {
            ...adConfig.pageTargeting,
            kw: "parsons,green,attack,i,was,recruited,by,isis,they,trained,us,on,how,to,kill"
          }
        };

        return withOpenInNewWindow(
          <AdComposer adConfig={brandProtectedAdConfig}>
            <Ad
              contextUrl="https://www.thetimes.co.uk/edition/news/teacher-saw-whatsapp-from-isis-on-bombers-phone-0clnddtw0"
              section="news"
              slotName="header"
            />
          </AdComposer>
        );
      }
    },
    {
      type: "story",
      name: "Ad - Variable Sizes",
      component: ({ selectV2 }) =>
        withOpenInNewWindow(
          renderAd(selectV2("Slot Name:", slotNames, slotNames[1]))
        )
    },
    {
      type: "story",
      name: "Multiple Ads",
      component: () => {
        const Children = (
          <View>
            {
              renderAd("ad-1")
            }
            {
              renderAd("ad-2")
            }
          </View>
        )
        return withOpenInNewWindow(Children);
      }
    }
  ]
};
