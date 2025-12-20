// components/NavBar.js
import React from "react";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

export default function NavBar() {
  const router = useRouter();

  return (
    <View style={styles.topRow}>
      {/* Left side button */}
      <Pressable>
        <Text style={styles.courseBtn}>Course</Text>
      </Pressable>

      {/* Center text */}
      <Text style={styles.desk}>desk</Text>

      {/* Right menu button */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => router.push("/MenuBar")}
      >
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  topRow: {
    flexDirection: "row",
    position: "absolute", // always top
    top: 30,
    left: 0,
    right: 0,
    height: 80,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    zIndex: 50,
  },
  desk: {
    padding: 8,
    fontSize: 18,
  },
  menuButton: {
    borderRadius: 8,
    width: 56,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  menuText: {
    color: "#334456",
    fontSize: 26,
    textAlign: "center",
    fontWeight: "bold",
  },
  courseBtn: {
    backgroundColor: "#334456",
    borderRadius: 6,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
});
