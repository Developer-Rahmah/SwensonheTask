import React from 'react';
import { I18nManager } from 'react-native';
import { Image, ImageSourcePropType } from 'react-native';
import { Colors } from 'SwensonheTask/assets/styles/Colors';
import Elements from 'SwensonheTask/assets/styles/Elements';
import { SCREEN_WIDTH } from '../services/helper/Constant';

export default function IconImage({
  source,
  color,
  small,
  style,
  transform = true
}: {
  source: ImageSourcePropType;
  color?: Colors;
  small?: boolean;
  style?: {};
  transform?: boolean
}) {
  return (
    <Image
      resizeMode="contain"
      source={source}
      style={[
        small
          ? {
            width: SCREEN_WIDTH / 17,
            height: SCREEN_WIDTH / 17,
            resizeMode: 'contain'
          }
          : Elements.icon,
        {
          tintColor: color,
          transform: [{ rotateY: transform ? I18nManager.isRTL ? '180deg' : '0deg' : '0deg' }],
        },
        style,
      ]}
    />
  );
}
