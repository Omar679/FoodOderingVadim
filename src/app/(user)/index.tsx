import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const TabIndex = () => {
  return <Redirect href={"/(admin)/menu"} />;
};

export default TabIndex;
