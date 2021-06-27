import React from "react";
import { StyleSheet, View } from "react-native";
import Bluetooth from "SwensonheTask/assets/icons/bluetooth.png";
import Logo from "SwensonheTask/assets/icons/logo.png";
import Notification from "SwensonheTask/assets/icons/notification.png";
import { Colors } from "SwensonheTask/assets/styles/Colors";
import IconImage from "SwensonheTask/src/components/IconImage";

import { SCREEN_HEIGHT } from "../services/helper/Constant";

export const Header = ({
  showLogo = true
}: {
  showLogo?: boolean;
  childere?: JSX.Element;
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.iconContainer}>
        <IconImage source={Bluetooth} small />
      </View>
      <View style={styles.iconContainer}>
        {showLogo ? <IconImage source={Logo} /> : null}
      </View>
      <View style={styles.iconContainer}>
        <IconImage source={Notification} small />
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.WHITE,
    width: "100%",
    paddingVertical: SCREEN_HEIGHT / 13,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20
  },
  iconContainer: {
    width: 30,
    height: 30,
    justifyContent: "center"
  }
});
