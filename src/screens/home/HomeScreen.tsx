import { Ionicons } from "@expo/vector-icons";
import {
  ChartPath,
  ChartPathProvider,
  monotoneCubicInterpolation
} from "@rainbow-me/animated-charts";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FullScreen from "SwensonheTask/assets/icons/full-screen.png";
import GridBackground from "SwensonheTask/assets/images/grid-background.jpeg";
import { Colors } from "SwensonheTask/assets/styles/Colors";
import Header from "SwensonheTask/src/components/Header";
import IconImage from "SwensonheTask/src/components/IconImage";
import { SCREEN_WIDTH } from "SwensonheTask/src/services/helper/Constant";

import { ChartItem } from "./ChartItem";
import { data } from "./helpers/Data";
import { Container } from "./styled";

export const { width: SIZE } = Dimensions.get("window");

const chartListingdata = ["l1", "l2", "l3", "aVR", "aVL", "aVF"];
const points = monotoneCubicInterpolation({ data, range: 40 });

export default function HomeScreen() {
  const anim = useRef(new Animated.Value(1));
  const [count, setCount] = useState(65);
  const [showChartListing, setShowChartListing] = useState(false);
  const [top, setTop] = useState(undefined);

  const [startValue] = useState(new Animated.Value(0));
  const [endValue] = useState(SCREEN_WIDTH + SCREEN_WIDTH);
  const [duration] = useState(2000);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim.current, {
          toValue: 1.5,
          duration: 500,
          useNativeDriver: true
        }),
        Animated.timing(anim.current, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        })
      ])
    ).start();
    Animated.loop(
      Animated.timing(startValue, {
        toValue: endValue,
        duration: duration,
        useNativeDriver: false
        // easing: Easing.linear
      })
    ).start();
    const timeout = setTimeout(() => {
      setCount(
        count < 65
          ? count + 1
          : count === 110
          ? 65
          : showChartListing
          ? count
          : count + 1
      );
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [count, showChartListing]);

  const onFullScreenPresse = () => {
    setShowChartListing(!showChartListing);
    if (!showChartListing) {
      setTop(-100);
    } else {
      setTop(undefined);
    }
  };
  const styles = StyleSheet.create({
    BPMContainer: {
      top: top,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 50,
      justifyContent: "center"
    },
    countTxt: {
      marginHorizontal: 10,
      marginLeft: 20,
      fontSize: 50,
      fontWeight: "bold"
    },
    BPMTxt: {
      marginBottom: 20
    },
    gridBackground: {
      width: SCREEN_WIDTH
    },
    fullScreenIconContainer: {
      alignItems: "flex-end",
      padding: 10
    },
    chartPointerAnimatedImg: {
      width: 30,
      height: 100,
      top: -130,
      borderRadius: 50
    },
    LEDTxtContainer: {
      flexDirection: "row",
      padding: 20,
      flex: 1,
      backgroundColor: "white"
    },
    alignCenter: {
      alignItems: "center"
    },
    blackTxt: {
      color: Colors.BLACK
    },
    lightGrayTxt: {
      color: Colors.LIGHT_GRAY
    },
    greenCircle: {
      width: 10,
      height: 10,
      marginTop: 10,
      backgroundColor: Colors.GREEN,
      borderRadius: 15
    },
    marginHorizontal: {
      marginHorizontal: 20
    }
  });
  return (
    <Container>
      <Header showLogo={top === undefined} />
      <View style={styles.BPMContainer}>
        <Animated.View style={{ transform: [{ scale: anim.current }] }}>
          <Ionicons name="md-heart" size={40} color="red" />
        </Animated.View>
        <Text style={styles.countTxt}>{count}</Text>
        <Text style={styles.BPMTxt}>BPM</Text>
      </View>
      <ScrollView>
        <ImageBackground source={GridBackground} style={styles.gridBackground}>
          <View style={styles.fullScreenIconContainer}>
            <TouchableOpacity onPress={() => onFullScreenPresse()}>
              <IconImage source={FullScreen} />
            </TouchableOpacity>
          </View>
          {!showChartListing ? (
            <ChartPathProvider
              data={{
                points,
                smoothingStrategy: "bezier"
              }}
            >
              <ChartPath
                height={SIZE / 2}
                stroke="black"
                width={SIZE}
                strokeWidth={5}
              />

              <Animated.Image
                source={GridBackground}
                resizeMode="cover"
                style={[
                  styles.chartPointerAnimatedImg,
                  {
                    transform: [
                      {
                        translateX: startValue
                      }
                    ]
                  }
                ]}
              />
            </ChartPathProvider>
          ) : (
            <>
              {chartListingdata.map((item, index) => {
                return (
                  <ChartItem
                    item={item}
                    SIZE={SIZE}
                    points={points}
                    key={index}
                  />
                );
              })}
            </>
          )}
        </ImageBackground>
      </ScrollView>
      <View style={styles.LEDTxtContainer}>
        <View style={styles.alignCenter}>
          <Text style={styles.blackTxt}>LED 1</Text>
          <View style={styles.greenCircle} />
        </View>
        <Text style={[styles.lightGrayTxt, styles.marginHorizontal]}>
          LED 2
        </Text>
        <Text style={styles.lightGrayTxt}>LED 3</Text>
      </View>
    </Container>
  );
}
