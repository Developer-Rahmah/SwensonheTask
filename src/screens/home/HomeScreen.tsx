import React from 'react';
import { View, Text } from 'react-native';
import Header from 'SwensonheTask/src/components/Header';
import Heart from 'SwensonheTask/assets/icons/heart.png'
import IconImage from 'SwensonheTask/src/components/IconImage';
import Title from 'SwensonheTask/src/components/Title';
import { Colors } from 'SwensonheTask/assets/styles/Colors';

export default function HomeScreen() {

  return (
    <>
      <Header />
      <View style={{ backgroundColor: 'green', flex: 1 ,}}>
        <View style={{ backgroundColor: 'red', flex: .6, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 50,justifyContent:'center' }}>
            <IconImage source={Heart} small />
            <Text style={{marginHorizontal:10, marginLeft:20,fontSize:50,fontWeight:'bold'}}>65</Text>
          <Text style={{ marginBottom: 20 }}>BPM</Text>

        

        </View>
        
        <View style={{ backgroundColor: 'blue', flex: 1 }}>
          <View style={{ backgroundColor: 'purple', flexDirection: 'row', padding: 20}}>
            <Text style={{color:Colors.BLACK}}>LED 1</Text>
            <Text style={{ color: Colors.LIGHT_GRAY ,marginHorizontal:20}}>LED 2</Text>
            <Text style={{ color: Colors.LIGHT_GRAY }}>LED 3</Text>

          </View>

        </View>
      </View>
    </>
  );
}
