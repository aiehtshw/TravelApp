import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { COLORS } from "../utils/colors";
export default function Background( { children } : any ) {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar translucent backgroundColor="transparent" />

      <SafeAreaView style={styles.container}>{children}</SafeAreaView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    //width: '100%',
    backgroundColor: COLORS.background
  },
  container: {
    flex: 1,
    width: '100%',
  }
});
