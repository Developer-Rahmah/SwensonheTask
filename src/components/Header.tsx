import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from 'SwensonheTask/assets/styles/Colors';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_HEIGHT } from '../services/helper/Constant';
import IconImage from 'SwensonheTask/src/components/IconImage';
import Bluetooth from 'SwensonheTask/assets/icons/bluetooth.png'
import Notification from 'SwensonheTask/assets/icons/notification.png'
import Logo from 'SwensonheTask/assets/icons/logo.png'

export const Header = ({
  titleColor,
  title = 'Items',
  showBack = false,
  showMenu = false,
  showBell = false,
  showLogo=true,
}: {
  titleColor?: Colors;
  title?: string;
  showBack?: boolean;
  showMenu?: boolean;
  showBell?: boolean;
  showLogo?:boolean;
    childere?:JSX.Element
}) => {
  const navigation = useNavigation();
  return (

    <View style={styles.header} >
      <View style={styles.iconContainer} >
        <IconImage source={Bluetooth} small />
      </View>
      <View style={styles.iconContainer} >

    {showLogo?
          <IconImage source={Logo} />
          :
          null
    }

      </View>
      <View style={styles.iconContainer} >
        <IconImage source={Notification} small />

      </View>

    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.WHITE, width: '100%', paddingVertical: SCREEN_HEIGHT / 13, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20
  },
  iconContainer: {
    width: 30, height: 30, justifyContent: 'center'
  },
});