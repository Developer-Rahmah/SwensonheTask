import React from 'react';
import { View, Text } from 'react-native';
import Header from 'SwensonheTask/src/components/Header';
import Heart from 'SwensonheTask/assets/icons/heart.png'
import IconImage from 'SwensonheTask/src/components/IconImage';
import Title from 'SwensonheTask/src/components/Title';

export default function HomeScreen() {

  return (
    <>
      <Header />
      <View style={{ backgroundColor: 'green', flex: 1 }}>
        <View style={{ backgroundColor: 'red', flex: .6, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 50, }}>
          <View style={{ backgroundColor: 'gold', }}>
            <IconImage source={Heart} />
          </View>
          <View style={{ backgroundColor: 'pink', paddingHorizontal: 10 }}>
            <Text>nnnnnn<Text>dddddd</Text></Text>
          </View>
          <View style={{ backgroundColor: 'purple', }}></View>
          <Title title='65' />

        </View>
        <View style={{ backgroundColor: 'blue', flex: 1 }}>

        </View>
      </View>
    </>
  );
}
