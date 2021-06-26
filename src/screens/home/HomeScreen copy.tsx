import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, Dimensions, Image, ImageBackground, TouchableOpacity } from 'react-native';
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
import { SCREEN_WIDTH } from 'SwensonheTask/src/services/helper/Constant';
import GridBackground from 'SwensonheTask/assets/images/grid-background.jpeg'
import FullScreen from 'SwensonheTask/assets/icons/full-screen.png'
import { ScrollView } from 'react-native-gesture-handler';
import Logo from 'SwensonheTask/assets/icons/logo.png'


export const { width: SIZE } = Dimensions.get('window');

export const data = [
  { x: 1453075200, y: 1.47 }, { x: 1453161600, y: 0.17 },
  { x: 1453248000, y: 2.53 }, { x: 1453334400, y: .54 },
  { x: 1453420800, y: 2.52 }, { x: 1453507200, y: .03 },
  { x: 1453680400, y: 2.10 }, { x: 1453681000, y: .50 },
  { x: 1453593620, y: 3.12 }, { x: 1453680200, y: 1.60 },
  { x: 1453593630, y: 3.11 }, { x: 1453682300, y: .53 },
  { x: 1453593640, y: 2.10 }, { x: 1453680000, y: .51 },
  { x: 1453593650, y: 3.10 }, { x: 1453680400, y: .52 },
  { x: 1453593600, y: .10 }, { x: 1453680600, y: 2.55 },
  { x: 1453593610, y: .10 }, { x: 1453680000, y: .55 },
  { x: 1453593670, y: 2.10 }, { x: 1453680000, y: .55 },
  { x: 14535936004, y: .10 }, { x: 1453699990, y: 1.30 },
  { x: 1453593690, y: 1.10 }, { x: 1453684000, y: 1.55 },
  { x: 1453766400, y: 0.30 }, { x: 1453852800, y: 1.42 },
  { x: 1453939200, y: 2.55 }, { x: 1454025600, y: .41 },
  { x: 1454112000, y: .473 }, { x: 1454198700, y: .20 },
  { x: 1454112000, y: 3.43 }, { x: 1454198400, y: 1.20 },
  { x: 1453766400, y: 4.30 }, { x: 1453852800, y: .42 },
];
const chartListingdata=[1,2,3,4,5,6]
const points = monotoneCubicInterpolation({ data, range: 40 });

export default function HomeScreen() {
  const anim = useRef(new Animated.Value(1));
  const [count, setCount] = useState(65)
  const [showChartListing, setShowChartListing] = useState(false)
  const [top, setTop] = useState(undefined)
  // this.state = {
  //   startValue: new Animated.Value(0),
  //   endValue: 150,
  //   duration: 5000,
  // };
  const [startValue, setStartValue] = useState(new Animated.Value(0),)
  const [endValue, setEndValue] = useState(SCREEN_WIDTH)
  const [duration, setDuration] = useState(1000)

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
     Animated.loop(
       
    Animated.timing(startValue, {
      toValue: endValue,
      duration: duration,
      // useNativeDriver: true,
      // easing: Easing.linear

    })).start();
    const timeout = setTimeout(() => {
      setCount(count<65? count + 1:count===110?65:showChartListing?count: count + 1);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
   
  }, [count,showChartListing]);

const onFullScreenPresse=()=>{
  setShowChartListing(!showChartListing)
  if(!showChartListing){
    setTop(  -100 )

  }else{
    setTop( undefined)

  }

}
  return (
    <>
      <Header  showLogo={top===undefined}/>
      <View style={{ flex:top !=undefined?1: .5 ,backgroundColor:Colors.WHITE}}>
        <View style={{ top:top,  flexDirection: 'row', alignItems: 'center', paddingHorizontal: 50,justifyContent:'center' }}>
            {/* <IconImage source={Heart} small /> */}
          <Animated.View style={{ transform: [{ scale: anim.current }] }}>
            <Ionicons name="md-heart" size={40} color="red" />
          </Animated.View>
          <Text style={{ marginHorizontal: 10, marginLeft: 20, fontSize: 50, fontWeight: 'bold' }}>{count}</Text>
          <Text style={{ marginBottom: 20 }}>BPM</Text>

        

        </View>
        
        <View style={{  flex: 1 }}>
          <ImageBackground
            source={GridBackground}

            style={{
              // backgroundColor: 'white',
              width: SCREEN_WIDTH,
            }}
          >
            <View style={{alignItems:'flex-end',padding:10}}>
           <TouchableOpacity onPress={()=>onFullScreenPresse()}>
                <IconImage source={FullScreen} />
             </TouchableOpacity> 
            </View>
            {!showChartListing?

            <ChartPathProvider
            
              data={{
                points,
                smoothingStrategy: 'bezier',
              }}>
            

              <ChartPath height={SIZE / 2} stroke="black" width={SIZE} strokeWidth={5} />
            
                <Animated.Image
                source={GridBackground}
                resizeMode='cover'
                  style={[
                    {  width: 40, height: 40, top: -100,borderRadius:70 },
                    {
                      transform: [
                        {
                          translateX: startValue,
                        },
                      ],
                    },
                  ]}
                />
              
            </ChartPathProvider>
            :
            <>
            <ScrollView style={{marginBottom:70}} >

                  {chartListingdata.map((item, index) => {
                    return (
                      <ChartPathProvider

                        data={{
                          points,
                          smoothingStrategy: 'bezier',
                        }}>


                        <ChartPath height={SIZE / 5} stroke="black" width={SIZE} strokeWidth={5} />

                        <Image
                          source={GridBackground}
                          resizeMode='cover'
                          style={
                            { width: 40, height: 40, top: -100, borderRadius: 70 }}

                        />

                      </ChartPathProvider>
                    )
                  })}
            </ScrollView>
 
</>
                }
          </ImageBackground>
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


