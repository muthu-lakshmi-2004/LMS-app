import { StyleSheet, Text, View , Pressable} from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.footerCantainer}>
      <View style={styles.footerCourseBtn}>
        <Pressable>
          <Text style={styles.courseBtn}>Course</Text>
        </Pressable>
        <Text style={styles.desk}>desk</Text>
      </View>
      <View>
        <Text style={styles.footerContent}>
          Unveiling the natural genius within each child is our passion at
          Neetie. Our commitment is to foster and guide young minds with
          meticulously designed lessons, finely crafted for children between 3
          and 12 years old.
        </Text>
        <View style={styles.categories}>
          <View>
            <Text style={styles.quick}>Quick Links</Text>
            <Text style={styles.home}>Home</Text>
            <Text style={styles.home}>Feature Course</Text>
          </View>
          <View>
            <Text style={styles.quick}>Category</Text>
            <Text style={styles.home}>Finance</Text>
            <Text style={styles.home}>Business</Text>
            <Text style={styles.home}>Marketing</Text>
            <Text style={styles.home}>Photography</Text>
          </View>
        </View>
      </View>
      <View style={styles.all}>
        <Text>© 2024 | Neetie All rights reserved.</Text>
      </View>
    </View>
  );
}

export default Footer

const styles = StyleSheet.create({
  footerCantainer: {
    backgroundColor: "#fdebe2ff",
  },
  footerCourseBtn: {
    flexDirection: "row",
    padding: 20,
    gap: 10,
  },
  courseBtn: {
    backgroundColor: "#334456",
    borderRadius: 6,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 15,
    width: 100,
    marginLeft: 30,
  },
  desk: {
    padding: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  footerContent: {
    fontSize: 25,
    lineHeight: 35,
    padding: 30,
    color: "gray",
  },
  categories: {
    flexDirection: "row",
    padding: 30,
    gap: 60,
  },
  quick: {
    fontSize: 35,
    color: "#334456",
    fontWeight: "bold",
  },
  home: {
    marginLeft: 20,
    fontSize: 23,
    padding: 10,
  },
  all:{
    backgroundColor:"white",
    fontSize:30,
    height:50,
    alignItems:"center",
    marginBottom:100,
  },
});