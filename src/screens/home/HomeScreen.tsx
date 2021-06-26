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
export const Data =
  [
    { x: 1451865600, y: 1.95 },
    { x: 1451952000, y: 1.95 },
    { x: 1452124800, y: .95 },
    { x: 1452211200, y: 1.99 },
    { x: 1452297600, y: 1.99 },
    { x: 1452384000, y: 1.05 },
    { x: 1452470400, y: .23 },
    { x: 1452556800, y: 1.13 },
    { x: 1452643200, y: 1.16 },
    { x: 1452729600, y: 1.22 },
    { x: 1452816000, y: 1.10 },
    { x: 1452902400, y: 4.10 },
    { x: 1452988800, y: 1.10 },
    { x: 1453075200, y: 0.30 },
    { x: 1453161600, y: 1.41 },
    { x: 1453248000, y: 4.473 },
    { x: 1453334400, y: 1.20 },
    { x: 1453420800, y: .42 },
    { x: 1453507200, y: 4.47 },
    { x: 1453593600, y: 0.53 },
    { x: 1453680000, y: .52 },
    { x: 1453766400, y: 1.10 },
    { x: 1453852800, y: 1.12 },
    { x: 1453939200, y: .11 },
    { x: 1454025600, y: 4.10 },
    { x: 1454112000, y: 0.10 },
    { x: 1454198400, y: 1.10 },
    { x: 1454284800, y: 4.10 },
    { x: 1454371200, y: 1.10 },
    { x: 1454457600, y: .10 },
    { x: 1454544000, y: 1.10 },
    { x: 1454630400, y: 0.30 },
    { x: 1454716800, y: 1.41 },
    { x: 1454803200, y: 4.473 },
    { x: 1454889600, y: 1.20 },
    { x: 1454976000, y: .42 },
  ];
const chartListingdata=['l1','l2','l3','aVR','aVL','aVF']
const points = monotoneCubicInterpolation({ Data, range: 40 });

export default function HomeScreen() {
  const anim = useRef(new Animated.Value(1));
  const [count, setCount] = useState(65)
  const [showChartListing, setShowChartListing] = useState(false)
  const [top, setTop] = useState(undefined)
  
  const [startValue, setStartValue] = useState(new Animated.Value(0),)
  const [endValue, setEndValue] = useState(SCREEN_WIDTH+SCREEN_WIDTH)
  const [duration, setDuration] = useState(2000)

  const te=66;
 const test =(t)=>{
   setCount(count + 1)
 return t+1;

 }
 
  useEffect(() => {

    Animated.loop(
      Animated.sequence([
        Animated.timing(anim.current, {
          toValue: 1.5,
          duration: 500,
        }),
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
    <ScrollView style={{backgroundColor:'white',flex:1}}>
      <Header  showLogo={top===undefined}/>
      <View style={{ flex:top !=undefined?1: .5 ,backgroundColor:Colors.WHITE}}>
        <View style={{ top:top,  flexDirection: 'row', alignItems: 'center', paddingHorizontal: 50,justifyContent:'center', }}>
            
          <Animated.View style={{ transform: [{ scale: anim.current }] }}>
            <Ionicons name="md-heart" size={40} color="red" />
          </Animated.View>
          <Text style={{ marginHorizontal: 10, marginLeft: 20, fontSize: 50, fontWeight: 'bold' }}>{count}</Text>
          <Text style={{ marginBottom: 20 }}>BPM</Text>

        

        </View>
        
        <View style={{  flex: 1,backgroundColor:'white' }}>
          <ImageBackground
            source={GridBackground}

            style={{
              // backgroundColor: 'white',
              width: SCREEN_WIDTH,
            }}
          >
            <View style={{alignItems:'flex-end',padding:10,}}>
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
                    {
                       width: 30, height: 100, top: -130, borderRadius:50, },
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
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{marginHorizontal:20,fontSize:18,fontWeight:'bold'}}>{item}</Text>
                     
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
                            { width: 20, height: 70, top: -100, borderRadius: 0 }}

                        />

                      </ChartPathProvider>
                      </View>
                    )
                  })}
            </ScrollView>
 
</>
                }
          </ImageBackground>
          <View style={{  flexDirection: 'row', padding: 20,backgroundColor:'white'}}>
            <View style={{alignItems:'center',}}>
              <Text style={{ color: Colors.BLACK ,}}>LED 1</Text>
              <View style={{ width: 10, height: 10, marginTop: 10,backgroundColor:Colors.GREEN,borderRadius:15}}/>
            </View>
            <Text style={{ color: Colors.LIGHT_GRAY ,marginHorizontal:20}}>LED 2</Text>
            <Text style={{ color: Colors.LIGHT_GRAY }}>LED 3</Text>

          </View>

        </View>
      </View>
    </ScrollView>
  );
}


