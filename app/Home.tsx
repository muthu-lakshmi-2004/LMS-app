import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { router, useRouter } from "expo-router";
import { useState } from "react";
import Best from "../assets/images/best.png";
import Great from "../assets/images/Great.png";
import Professional from "../assets/images/Professional.png";
import programming from "../assets/images/Programming.jpg";
import Design from "../assets/images/Design.jpg";
import AL from "../assets/images/AL.webp";
import readBook from "../assets/images/readBook.png";
import pencilKid from "../assets/images/pencilKid.png";
import flyingBook from "../assets/images/flyingBook.png"


const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const carts = [
    {
      id: "1",
      title: "Best Platform",
      description:
        "Elevating learning journeys with engaging content for young minds.",
      image: Best,
    },
    {
      id: "2",
      title: "Great materials",
      description:
        "Neetie: Exceptional materials, elevating learning for young minds worldwide",
      image: Great,
    },
    {
      id: "3",
      title: "Professional Course",
      description:
        "Elevating young learners with premium, expert-led professional courses.",
      image: Professional,
    },
  ];
  const course = [
    {
      id: "1",
      title: "Programming",
      description: "Game development: Programming with java ....",
      button: "View Details",
      image: programming,
    },
    {
      id: "2",
      title: "Medical",
      description: "Medical Basics 101: Anatomy of whole hum...",
      button: "View Details",
      image: Design,

    },
    {
      id: "3",
      title: "AL/ML",
      description: "Supervised Machine Learning: Regression ...",
      button: "View Details",
      image: AL,
    },
    {
      id: "4",
      title: "Design",
      description: "Product design and analysis: Psychical G..",
      button: "View Details",
      image: Design,
    },
    {
      id: "5",
      title: "Psychology",
      description: "Psychology : How to solve anxiety proble...",
      button: "View Details",
      image: programming,
    },
    {
      id: "6",
      title: "Finance",
      description: "Business Communication: How to deal with...",
      button: "View Details",
      image: AL,
    },
  ];
  const featureCourse = [
    {
      id: "1",
      title: "Design",
      description:
        "Neetie’s Design course immerses students in creative exploration, leveraging industry tools for innovative and impactful solutions.",
      image: pencilKid,
    },
    {
      id: "2",
      title: "Business",
      description:
        "Neetie’s Business course offers practical insights, real-world case studies, and mentorship for entrepreneurial success.",
      image: readBook,
    },
    {
      id: "3",
      title: "Medical",
      description:
        "Neetie’s Marketing course blends theory with hands-on practice, utilizing industry trends and innovative strategies for success.",
      imgae: flyingBook,
    },
  ];
  return (
    <View>
      <View style={styles.topRow}>
        <Pressable>
          <Text style={styles.courseBtn}>Course</Text>
        </Pressable>
        <Text style={styles.desk}>desk</Text>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            router.push("/MenuBar");
            setShowMenu(!showMenu);
          }}
        >
          <Text style={styles.menuText}>☰ </Text>
        </TouchableOpacity>

        {/* Dropdown Menu */}
        {showMenu && (
          <View>
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
      <ScrollView>
        <View style={styles.heroSection}>
          <Image
            source={require("../assets/images/hero.png")}
            style={styles.heroImage}
            resizeMode="contain"
          />
          <Text style={styles.title}>
            Empowering{"\n"}Every Child's{"\n"}Genius
          </Text>
          <Text style={styles.subTitle}>
            Partnering with Neetie to{"\n"}Unleash Potential
          </Text>
          <Text style={styles.description}>
            Unveiling the natural genius within each child is our passion at
            Neetie. Our commitment is to foster and guide young minds with
            meticulously designed lessons, finely crafted for children between 3
            and 12 years old.
          </Text>
          <Pressable style={styles.exploreBtn}>
            <Text style={styles.exploreText}>Explore Courses</Text>
          </Pressable>
          <Text style={styles.expert}>Learn more than 10 Expert Courses</Text>
        </View>
        <View style={styles.container}>
          {carts.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.imageBox}>
                <Image
                  source={
                    typeof item.image === "string"
                      ? { uri: item.image }
                      : item.image
                  }
                  style={styles.cardImage}
                />
              </View>
              <View style={styles.line} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.description}</Text>
            </View>
          ))}

          <View>
            <Text style={styles.feature}>Featured Courses</Text>
            <Text style={styles.featureText}>
              Explore Neetie's standout courses, expertly designed to ignite
              curiosity and foster lifelong learning journeys.
            </Text>
          </View>
          <View>
            {course.map((item) => (
              <View key={item.id} style={styles.card}>
                <View style={styles.courseBox}>
                  <Image
                    source={
                      typeof item.image === "string"
                        ? { uri: item.image }
                        : item.image
                    }
                    style={styles.courseImage}
                  />
                  {/* <View style={styles.starContainer}>
                  <Text style={styles.star}>⭐⭐⭐⭐⭐</Text>
                </View> */}

                  <Text style={styles.courseTitle}>{item.title}</Text>
                  <Text style={styles.courseDesc}>{item.description}</Text>
                  <Pressable
                    style={styles.viewBtn}
                    onPress={() => router.push("/")}
                  >
                    <Text style={styles.viewText}>{item.button}</Text>
                  </Pressable>
                </View>
              </View>
            ))}

            <Pressable style={styles.exploreBtn}>
              <Text style={styles.exploreText}>Explore Courses</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.featureContainer}>
          <View>
            <Text style={styles.featureCourse}>Feature of this course</Text>
          </View>
          <View>
            {featureCourse.map((item) => (
              <View key={item.id} style={styles.featureCard}>
                <View>
                  <Image
                    source={
                      typeof item.image === "string"
                        ? { uri: item.image }
                        : item.image
                    }
                    style={styles.featureImage}
                  />
                </View>
                <View style={styles.featureBox}>
                  <Text style={styles.featureTitle}>{item.title}</Text>
                  <Text style={styles.featureCardDesc}>{item.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View>
          

        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

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
    fontSize: 20,
  },
  home: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#334456",
  },
  courseBtn: {
    backgroundColor: "#334456",
    borderRadius: 6,
    color: "white",
    fontWeight: "bold",
    flex: 0.7,
    textAlign: "center",
    fontSize: 25,
    padding: 6,
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
  heroSection: {},

  heroImage: {
    width: "180%",
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
    fontFamily: "DaysOne",
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
    fontFamily: "DaysOne",
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
    overflow: "visible", // <-- IMPORTANT!
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
});
