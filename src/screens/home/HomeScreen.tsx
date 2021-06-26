import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated,Dimensions } from 'react-native';
import Header from 'SwensonheTask/src/components/Header';
import Heart from 'SwensonheTask/assets/icons/heart.png'
import IconImage from 'SwensonheTask/src/components/IconImage';
import Title from 'SwensonheTask/src/components/Title';
import { Colors } from 'SwensonheTask/assets/styles/Colors';
import { Ionicons } from '@expo/vector-icons';
//@ts-ignore
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  monotoneCubicInterpolation,
} from '@rainbow-me/animated-charts';

export const { width: SIZE } = Dimensions.get('window');

export const data = [
  { x: 1453075200, y: 1.47 }, { x: 1453161600, y: 2.37 },
  { x: 1453248000, y: 1.53 }, { x: 1453334400, y: .54 },
  { x: 1453420800, y: 1.52 }, { x: 1453507200, y: 1.03 },
  { x: 1453593600, y: 2.10 }, { x: 1453680000, y: 1.50 },
  { x: 1453593600, y: 2.12 }, { x: 1453680000, y: 1.50 },
  { x: 1453593600, y: 2.11 }, { x: 1453680000, y: 1.53 },
  { x: 1453593600, y: 2.10 }, { x: 1453680000, y: 1.55 },

  { x: 1453766400, y: 2.30 }, { x: 1453852800, y: 1.42 },
  { x: 1453939200, y: 2.55 }, { x: 1454025600, y: 1.41 },
  { x: 1454112000, y: 2.43 }, { x: 1454198400, y: 1.20 },
];

const points = monotoneCubicInterpolation({ data, range: 40 });

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
      <View style={{ flex: 1 ,}}>
        <View style={{  flex: .6, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 50,justifyContent:'center' }}>
            {/* <IconImage source={Heart} small /> */}
          <Animated.View style={{ transform: [{ scale: anim.current }] }}>
            <Ionicons name="md-heart" size={40} color="red" />
          </Animated.View>
          <Text style={{ marginHorizontal: 10, marginLeft: 20, fontSize: 50, fontWeight: 'bold' }}>{count}</Text>
          <Text style={{ marginBottom: 20 }}>BPM</Text>

        

        </View>
        
        <View style={{  flex: 1 }}>
          <View
            style={{
              backgroundColor: 'red',
            }}>
            <ChartPathProvider
              data={{
                points,
                smoothingStrategy: 'bezier',
              }}>
              <ChartPath height={SIZE / 2} stroke="yellow" width={SIZE} />
              <ChartDot
                style={{
                  backgroundColor: 'blue',
                }}
              />
            </ChartPathProvider>
          </View>
          <View style={{  flexDirection: 'row', padding: 20}}>
            <Text style={{color:Colors.BLACK}}>LED 1</Text>
            <Text style={{ color: Colors.LIGHT_GRAY ,marginHorizontal:20}}>LED 2</Text>
            <Text style={{ color: Colors.LIGHT_GRAY }}>LED 3</Text>

          </View>

        </View>
      </View>
    </>
  );
}


