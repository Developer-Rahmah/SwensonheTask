import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { Colors } from 'SwensonheTask/assets/styles/Colors';
import { useNavigation } from '@react-navigation/native';
const Header = ({
  titleColor,
  title = 'Items',
  showBack = false,
  showMenu = false,
  showBell = false,
}: {
  titleColor?: Colors;
  title?: string;
  showBack?: boolean;
  showMenu?: boolean;
  showBell?: boolean;
}) => {
  const navigation = useNavigation();
  return (

    <View style={{ backgroundColor: 'red', width: 200, height: 100 }} />
  );
};

export default Header;
