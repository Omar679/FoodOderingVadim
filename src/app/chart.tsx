import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { useCart } from "../Providers/CartProvider";
import { CartItem, Product } from "../types";
import CartListItem from "../components/CartListItem";

const chart = () => {
  const { items } = useCart();

  return (
    <View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <FlatList
        data={items}
        renderItem={({ item }) => 
          <CartListItem cartItem={item} />
        }
      />
    </View>
  );
};

export default chart;

const styles = StyleSheet.create({});
