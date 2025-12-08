import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Link, useRouter } from "expo-router";
import TenantLogin from "../app/TenantLogin";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }
    setError("");
  };

  const data = [
    { label: "Anna University", value: "Anna University" },
    { label: "Loyola College", value: "Loyola College" },
    { label: "PSG College of Technology", value: "PSG College of Technology" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#fcfaf0" }}>
      <View style={styles.topRow}>
        <Pressable>
          <Text style={styles.courseBtn}>Course</Text>
        </Pressable>
        <Text style={styles.desk}>desk</Text>
        <Text style={styles.home} onPress={() => router.push("/Home")}>
          Home
        </Text>
      </View>

      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>LOGIN</Text>

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Text style={styles.label}>Institution Name</Text>
          <Dropdown
            style={styles.dropdown}
            data={data}
            labelField="label"
            valueField="value"
            value={value}
            placeholder="Select Tenant"
            onChange={(item) => setValue(item.value)}
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>

          <Text
            style={styles.organi}
            onPress={() => router.push("/TenantLogin")}
          >
            Admin Login! Click here for Organization
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topRow: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  desk: {
    flex: 1,
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  box: {
    backgroundColor: "#fdf2e7ff",
    padding: 20,
    borderRadius: 12,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
  },
  title: { fontSize: 40, textAlign: "center", fontWeight: "bold" },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 6,
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    height: 45,
    padding: 10,
    marginBottom: 12,
    backgroundColor: "white",
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 6,
    height: 45,
    padding: 10,
    backgroundColor: "white",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#eab308",
    padding: 15,
    borderRadius: 6,
    marginTop: 20,
  },
  btnText: { color: "white", fontWeight: "bold", textAlign: "center" },
  organi: {
    marginTop: 15,
    color: "#334456",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  courseBtn: {
    backgroundColor: "#334456",
    padding: 10,
    borderRadius: 6,
    color: "white",
  },
  home: { fontSize: 22, fontWeight: "bold", color: "#334456" },
});