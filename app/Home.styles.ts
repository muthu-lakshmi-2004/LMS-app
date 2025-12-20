import { StyleSheet } from 'react-native'
import React from 'react'

  
  const styles = StyleSheet.create({
    
    home: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#334456",
    },
    heroSection: {},

    heroImage: {
      width: "100%",
      height: 600,
      alignSelf: "center",
    },

    title: {
      fontSize: 80,
      fontWeight: "700",
      color: "#334456",
      marginBottom: 10,
      marginLeft: 40,
      marginRight: 10,
    },

    subTitle: {
      fontSize: 30,
      fontWeight: "600",
      color: "#334456",
      marginBottom: 15,
      marginLeft: 40,
      padding: 10,
    },

    description: {
      fontSize: 20,
      color: "#334456",
      lineHeight: 35,
      padding: 12,
      marginLeft: 40,
      gap: 10,
      marginBottom: 20,
    },
    exploreBtn: {
      width: 250,
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      borderRightWidth: 10,
      borderBottomWidth: 10,
      borderLeftWidth: 2,
      borderTopWidth: 2,
      height: 90,
      marginLeft: 50,
      borderColor: "#334456",
      marginBottom: 40,
      backgroundColor: "white",
    },
    exploreText: {
      color: "#334456",
      fontSize: 25,
      textAlign: "center",
    },
    expert: {
      fontSize: 25,
      color: "#334456",
      textAlign: "center",
      marginBottom: 20,
      fontWeight: "bold",
    },
    container: {
      backgroundColor: "#fdebe2ff",
    },
    card: {
      padding: 39,
    },

    imageBox: {
      borderWidth: 1,
      width: "20%",
      borderColor: "#334456",
      borderRadius: 6,
      marginBottom: 15,
      padding: 9,
      backgroundColor: "#fcf9f0",
    },
    courseBox: {
      borderWidth: 3,
      borderColor: "#334456",
      borderRadius: 15,
      borderRightWidth: 10,
      borderBottomWidth: 10,
      borderLeftWidth: 4,
      borderTopWidth: 4,
      marginBottom: 15,
      padding: 17,
      backgroundColor: "#fcf9f0",
    },
    feature: {
      backgroundColor: "#fdebe2ff",
      color: "#334456",
      fontSize: 35,
      fontWeight: "bold",
      textAlign: "center",
    },
    featureText: {
      backgroundColor: "#fdebe2ff",
      padding: 30,
      fontSize: 20,
    },

    cardImage: {
      width: "110%",
      height: 60,
      borderRadius: 10,
    },
    courseImage: {
      width: "100%",
      height: 200,
      borderRadius: 10,
      resizeMode: "contain",
    },
    cardTitle: {
      fontSize: 35,
      flex: 5,
      fontWeight: "bold",
      color: "#334456",
      marginBottom: 6,
    },
    courseTitle: {
      fontSize: 35,
      fontWeight: "bold",
      color: "#334456",
      marginBottom: 6,
      padding: 10,
    },

    cardDesc: {
      fontSize: 25,
      color: "#334456",
      lineHeight: 30,
    },
    courseDesc: {
      fontSize: 25,
      color: "#334456",
      lineHeight: 30,
      padding: 15,
      fontWeight: "bold",
    },
    line: {
      height: 4,
      width: 60,
      backgroundColor: "#334456",
      marginVertical: 15,
      borderRadius: 3,
    },
    viewBtn: {
      backgroundColor: "#334456",
      width: "95%",
      height: 50,
      marginLeft: 10,
      borderRadius: 10,
    },
    viewText: {
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 25,
      padding: 7,
    },
    // starContainer: {
    //   flexDirection: "row",
    //   justifyContent:"space-evenly",
    // },
    // star: {
    //   flex:4,
    //   fontSize: 10,
    //   fontWeight: "bold",
    //   marginTop:20,
    //   marginLeft:80,

    // },
    featureContainer: {
      backgroundColor: "#fbf2eeff",
    },

    featureCourse: {
      textAlign: "center",
      fontSize: 40,
      fontWeight: "bold",
      padding: 30,
    },

    featureBox: {
      borderWidth: 3,
      borderRadius: 16,
      borderColor: "#334456",
      position: "relative",
      overflow: "visible",
    },

    featureTitle: {
      fontSize: 40,
      fontWeight: "bold",
      textAlign: "center",
      color: "#334456",
      padding: 30,
    },

    featureCardDesc: {
      fontSize: 28,
      padding: 15,
      marginLeft: 40,
      color: "#334456",
      marginBottom: 20,
    },

    featureCard: {
      backgroundColor: "#fbf2eeff",
      padding: 50,
      borderRadius: 16,
      borderColor: "#334155",
      marginVertical: 20,
      position: "relative",
      zIndex: 1,
      overflow: "visible", // <-- VERY IMPORTANT
    },

    featureImage: {
      width: 70,
      height: 70,
      position: "absolute",
      left: -35, // better alignment
      top: 120, // move image UP, not inside card
      resizeMode: "contain",
      zIndex: 10, // keep image above border
      backgroundColor: "transparent",
    },
    videoContainer: {
      backgroundColor: "#fdebe2ff",
    },
    videoTitle: {
      padding: 20,
      fontSize: 50,
      textAlign: "center",
      color: "#334456",
      fontWeight: "bold",
    },
    promoVideo: {
      color: "#334456",
      width: 390,
      height: 200,
      margin: 20,
      borderRadius: 14,
    },
    videoText: {
      padding: 25,
      fontSize: 18,
      textAlign: "center",
    },
    eductaionCantainer: {
      backgroundColor: "#fbf2eeff",
    },
    education: {
      padding: 40,
      fontSize: 20,
      color: "#6f6f6f",
      textAlign: "center",
    },
    eductaionTitle: {
      textAlign: "center",
      fontSize: 70,
      fontWeight: "bold",
      padding: 25,
      color: "#334456",
    },
    educationBox: {
      flexDirection: "row",
      margin: 30,
      backgroundColor: "#fdebe2ff",
      borderRadius: 17,
      borderRightWidth: 10,
      borderBottomWidth: 10,
      borderLeftWidth: 3,
      borderTopWidth: 3,
    },
    educationImage: {
      width: 200,
      height: 190,
      borderRadius: 100,
      overflow: "hidden",
      alignItems: "center",
      marginTop: 60,
      marginLeft: 10,
    },

    eduBox: {
      marginLeft: 120,
      backgroundColor: "#fdebe2ff",
      borderRadius: 15,
    },
    viewCourseBtn: {
      width: "50%",
      height: 30,
      borderStyle: "dashed",
      textAlign: "center",
      borderColor: "black", 
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      margin: 30,
    },
    viewcourseText: {
      borderColor: "black",
    },
    eduCourseBtn: {
      flexDirection: "row",
    },
    eduCourseTitle: {
      fontSize: 40,
      fontWeight: "bold",
      padding: 10,
    },
    eduCourseDesc: {
      fontSize: 20,
      padding: 10,
    },
  });
export default styles;
