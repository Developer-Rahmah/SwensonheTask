import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import { Colors } from "SwensonheTask/assets/styles/Colors";

import { SCREEN_WIDTH } from "../services/helper/Constant";

export default function IconImage({
  source,
  color,
  small
}: {
  source: ImageSourcePropType;
  color?: Colors;
  small?: boolean;
}) {
  return (
    <Image
      resizeMode="contain"
      source={source}
      style={[
        small
          ? {
              width: SCREEN_WIDTH / 13,
              height: SCREEN_WIDTH / 13,
              resizeMode: "contain"
            }
          : {
              width: SCREEN_WIDTH / 7,
              height: SCREEN_WIDTH / 7
            },
        {
          tintColor: color
        }
      ]}
    />
  );
}
