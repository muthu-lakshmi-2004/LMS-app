import React from 'react'
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, } from "react-native";


const MenuBar = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.menuItem} onPress={() => router.push("/")}>
        Home
      </Text>

      <Text style={styles.menuItem} onPress={() => router.push("/Login")}>
        Featured Courses
      </Text>

      <Text style={styles.menuItembtn} onPress={() => router.push("/Login")}>
        Login
      </Text>
    </View>
  );
};
 export default MenuBar;


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  menuItem: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#354a62ff",
    marginVertical: 15,
  },
  menuItembtn: {
    fontSize: 25,
    fontWeight: "bold",
    backgroundColor: "#354a62ff",
    color: "white",
    padding: 10,
    borderRadius: 6,
    width: 100, // numeric width recommended
    textAlign: "center",
  },
});
