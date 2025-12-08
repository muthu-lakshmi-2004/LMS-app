import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Link, router } from "expo-router";

export default function TenantLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }
    setError("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Image
          source={require("../assets/images/kraysLogo.png")}
          style={styles.img}
        />
        <Text style={styles.TopRowText}>Tenant Login</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>LOGIN</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="name@gmail.com"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholder="......."
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity
          style={styles.button}
          onPress={() => <Link href="/" asChild></Link>}
        >
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.other} onPress={() => router.push("/")}>
          Other Logins ! User Owner
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  topRow: {
    flexDirection: "row",
    padding: 20,
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  TopRowText: {
    fontSize: 30,
    marginBottom: 20,
    color: "#334456",
    fontFamily: "Inter",
  },
  box: {
    backgroundColor: "#1f2937",
    color: "white",
    width: "90%",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "DaysOne",
    color: "white",
    padding: 10,
    margin: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginLeft: 25,
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    height: 45,
    padding: 9,
    margin: 25,
    marginBottom: 12,
    color: "#8fa3af",
    backgroundColor: "#374151",
  },

  error: {
    color: "red",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#eab308",
    borderRadius: 6,
    marginTop: 20,
    margin: 25,
    height: 45,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 13,
    borderRadius: 6,
  },
  other: {
    color: "#9ca3af",
    margin: 30,
    marginTop: 10,
    textDecorationLine: "underline",
  },
});
