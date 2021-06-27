import { ChartPath, ChartPathProvider } from "@rainbow-me/animated-charts";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ChartItem = ({
  item,
  SIZE,
  points
}: {
  item: string;
  SIZE;
  points;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.boldTxt}>{item}</Text>

      <ChartPathProvider
        data={{
          points,
          smoothingStrategy: "bezier"
        }}
      >
        <ChartPath
          height={SIZE / 5}
          stroke="black"
          width={SIZE}
          strokeWidth={5}
        />
      </ChartPathProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  boldTxt: {
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: "bold"
  }
});
