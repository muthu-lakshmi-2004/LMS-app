import {
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Video } from "expo-av";
import React, { useRef, useState } from "react";
import { useRouter } from "expo-router";
import Best from "../assets/images/best.png";
import Great from "../assets/images/Great.png";
import Professional from "../assets/images/Professional.png";
import programming from "../assets/images/Programming.jpg";
import Design from "../assets/images/Design.jpg";
import AL from "../assets/images/AL.webp";
import readBook from "../assets/images/readBook.png";
import pencilKid from "../assets/images/pencilKid.png";
import flyingBook from "../assets/images/flyingBook.png";
import styles from "./Home.styles";
import eduction_1 from "../assets/images/sym1.jpeg";
import eduction_3 from "../assets/images/sym3.jpeg";
import eduction_4 from "../assets/images/sym4.jpeg";
import NavBar from "@/components/Nav Bar/NavBar";
import Footer from "@/components/Footer/Footer"


const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();
const videoRef = useRef<Video | null>(null);


  const handlePlay = async () => {
    if (videoRef.current) {
      await videoRef.current.playAsync();
      setIsPlaying(true);
    }
  };
  
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
      image: flyingBook,
    },
  ];
  const Education = [
    {
      id: "1",
      title: "Organized Syllabus:",
      description:
        "Comprehensive, sequential content fostering holistic educational growth.",
      button: "View Course ->",
      image: eduction_1,
    },
    {
      id: "2",
      title: "Structured Curriculum:",
      description:
        "Develop comprehensive curriculum, align with educational standards.",
      button: "View Course ->",
      image: eduction_4,
    },
    {
      id: "3",
      title: "Effective Instruction:",
      description:
        "Utilize varied teaching methods, encourage interaction, critical thinking.",
      button: "View Course ->",
      image: eduction_3,
    },
    {
      id: "4",
      title: "Continuous Monitoring:",
      description:
        "Monitor progress, adapt teaching strategies, cater to needs.",
      button: "View Course ->",
      image: eduction_4,
    },
  ];
  return (
    <View>
      <NavBar />
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
                    onPress={() => router.push("/Login")}
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
        <View style={styles.videoContainer}>
          <View>
            <Text style={styles.videoTitle}>Watch our promo video</Text>
          </View>
          <View>
            <Text style={styles.videoText}>
              Discover Neetie's essence in our captivating, defining promotional
              video
            </Text>

            <TouchableOpacity onPress={handlePlay}>
              <Video
                ref={videoRef}
                source={require("../assets/images/promo.mp4")}
                style={styles.promoVideo}
                useNativeControls
                resizeMode="contain"
                isLooping
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.eductaionCantainer}>
          <View>
            <Text style={styles.education}>Educational Program</Text>
          </View>
          <View>
            <Text style={styles.eductaionTitle}>
              Step By Step Systematic Education
            </Text>
          </View>
          <View>
            <View>
              {Education.map((item) => (
                <View style={styles.educationBox}>
                  <View key={item.id} style={styles.cardTitle}>
                    <Image
                      source={
                        typeof item.image === "string"
                          ? { uri: item.image }
                          : item.image
                      }
                      style={styles.educationImage}
                    />
                  </View>

                  {/* <View style={styles.starContainer}>
                  <Text style={styles.star}>⭐⭐⭐⭐⭐</Text>
                </View> */}
                  <View style={styles.eduBox}>
                    <Text style={styles.eduCourseTitle}>{item.title}</Text>
                    <View style={styles.eduCourseBtn}>
                      <Text style={styles.eduCourseDesc}>
                        {item.description}
                      </Text>
                    </View>
                    <View>
                      <Pressable
                        style={styles.viewCourseBtn}
                        onPress={() => router.push("/Login")}
                      >
                        <Text style={styles.viewcourseText}>{item.button}</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};
export default Home;

