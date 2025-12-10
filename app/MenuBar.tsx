import { StyleSheet, Text, View,  } from "react-native";
import React from 'react'
import { push, } from "expo-router/build/global-state/routing";
import { useRouter } from "expo-router";


const MenuBar = () => {
      const router = useRouter();

  return (
    <View style={styles.container}>
      <Text
        style={styles.menuItem}
        onPress={() => {
          router.push("/Home");
        }}
      >
        Home
      </Text>
      <Text
        style={styles.menuItem}
        onPress={() => {
          router.push("/");
        }}
      >
        Featured Courses
      </Text>
      <Text
        style={styles.menuItembtn}
        onPress={() => {
          router.push("/");
        }}
      >
        Login
      </Text>
    </View>
  );
}

export default MenuBar

const styles = StyleSheet.create({
  container:{
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    flex:1,
    gap:30,
  },
  menuItem: {
    fontSize: 25,
    fontWeight: "bold",
    color:"#354a62ff",
    marginVertical:15,
  },
  menuItembtn:{
    fontSize: 25,
    fontWeight: "bold",
    backgroundColor:"#354a62ff",
    color: "white",
    padding: 10,
    borderRadius: 6,
    width:"24%",
    textAlign:"center",
  }
});