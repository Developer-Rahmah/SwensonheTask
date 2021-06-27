import React from "react";
import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { Colors } from "SwensonheTask/assets/styles/Colors";

import IconImage from "../IconImage";
import Title from "../Title";

const BottomTabButton = ({
  icon,
  focused,
  label
}: {
  icon: ImageSourcePropType;
  focused: boolean;
  label: string;
  onPress: any;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { borderTopColor: focused ? Colors.GREEN : Colors.LIGHT_GRAY }
      ]}
    >
      <View style={label === "" ? styles.greenCircle : null}>
        <IconImage
          small
          source={icon}
          color={
            focused
              ? Colors.GREEN
              : label === ""
              ? Colors.WHITE
              : Colors.LIGHT_GRAY
          }
        />
      </View>
      <Title color={Colors.LIGHT_GRAY} title={label} />
    </TouchableOpacity>
  );
};

export default BottomTabButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 0
  },

  greenCircle: {
    backgroundColor: Colors.GREEN,
    padding: 20,
    borderRadius: 50,
    marginLeft: 20
  }
});
