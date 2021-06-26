import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated } from 'react-native';
import Header from 'SwensonheTask/src/components/Header';
import Heart from 'SwensonheTask/assets/icons/heart.png'
import IconImage from 'SwensonheTask/src/components/IconImage';
import Title from 'SwensonheTask/src/components/Title';
import { Colors } from 'SwensonheTask/assets/styles/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const anim = useRef(new Animated.Value(1));
  const [count, setCount] = useState(65)
  const te=66;
 const test =(t)=>{
   setCount(count + 1)
 return t+1;

 }
  useEffect(() => {
    // makes the sequence loop
    Animated.loop(
      // runs given animations in a sequence
      Animated.sequence([
        // increase size
        Animated.timing(anim.current, {
          toValue: 1.5,
          duration: 500,
        }),
        // decrease size
        Animated.timing(anim.current, {
          toValue: 1,
          duration: 500,
        }),
        

      ]),
    ).start();
    const timeout = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
   
  }, [count]);

  return (
    <>
      <Header />
      <View style={{ backgroundColor: 'green', flex: 1 ,}}>
        <View style={{  flex: .6, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 50,justifyContent:'center' }}>
            {/* <IconImage source={Heart} small /> */}
          <Animated.View style={{ transform: [{ scale: anim.current }] }}>
            <Ionicons name="md-heart" size={40} color="red" />
          </Animated.View>
          <Text style={{ marginHorizontal: 10, marginLeft: 20, fontSize: 50, fontWeight: 'bold' }}>{count}</Text>
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
