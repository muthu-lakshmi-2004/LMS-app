import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useRouter } from "expo-router";
import { loginApi } from "../../api/authApi";
import NavBar from "@/components/Nav Bar/NavBar";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const router = useRouter();


  const handleLogin = async () => {
    console.log("LOGIN CLICKED");

    if (!email || !password) {
      alert("Enter email & password");
      return;
    }

    try {
      const res = await loginApi(email, password);
      console.log("RESPONSE:", res.data);

      if (res.data.length > 0) {
        router.replace("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.log("ERROR:", error);
      alert("Server not reachable");
    }
  };


  const data = [
    { label: "Anna University", value: "Anna University" },
    { label: "Loyola College", value: "Loyola College" },
    {
      label: "PSG College of Technology",
      value: "PSG College of Technology",
    },
  ];
  

  

  return (
    <View style={{ flex: 1, backgroundColor: "#fcfaf0" }}>
      <NavBar />
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
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
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
    borderColor: "#515050ff",
    marginTop: 140, 
    height:450,
  },
  title: {
    fontSize: 36,
    textAlign: "center",
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
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
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginBottom: 12,
  },

  error: {
    color: "red",
    textAlign: "center",
    marginTop: 6,
  },
  button: {
    backgroundColor: "#eab308",
    padding: 14,
    borderRadius: 8,
    marginTop: 40,
  },
  btnText: { color: "white", fontWeight: "bold", textAlign: "center" },
  organi: {
    marginTop: 30,
    color: "#334456",
    textAlign: "center",
    textDecorationLine: "underline",
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
  home: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#334456",
  },
});
