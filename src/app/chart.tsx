import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const chart = () => {
  return (
    <View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <Text>chart</Text>
    </View>
  );
};

export default chart;

const styles = StyleSheet.create({});
