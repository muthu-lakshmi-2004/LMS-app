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
  const [showMenu, setShowMenu] = useState(false);


  return (
    <View style={{ flex: 1, backgroundColor: "#fcfaf0" }}>
      <View style={styles.topRow}>
        <Pressable>
          <Text style={styles.courseBtn}>Course</Text>
        </Pressable>
        <Text style={styles.desk}>desk</Text>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() =>  {router.push("/MenuBar"); setShowMenu(!showMenu)}}
        >
          <Text style={styles.menuText}>☰ </Text>
        </TouchableOpacity>

        {/* Dropdown Menu */}
        {showMenu && (
          <View style={styles.dropdown}>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Settings</Text>
            </TouchableOpacity>
          </View>
        )}
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
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    
  },
  desk: {
    padding: 20,
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  menuButton: {
    borderRadius: 8,
    width: 100,
  },

  menuText: {
    color: "#334456",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },

  item: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  itemText: {
    fontSize: 16,
    borderBlockColor: "#1a1a1aff",
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
    marginTop:200,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
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
    padding: 18,
    borderRadius: 8,
    marginTop: 30,
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
    borderRadius: 6,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center", 
    fontSize: 25,
    width:"160%",
    height:60,
    padding: 12,
  },
  home: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#334456",
  },
});