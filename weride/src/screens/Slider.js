import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const Slider = () => {
  const navigation = useNavigation();
  const Home = createBottomTabNavigator();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(newIndex);
  };

  const renderPagination = () => {
    const dots = [0, 1, 2].map((i) => (
      <View
        key={i}
        style={[
          styles.dot,
          i === activeIndex ? styles.activeDot : styles.inactiveDot,
        ]}
      />
    ));
    return <View style={styles.pagination}>{dots}</View>;
  };

  const slides = [
    {
      title: "Partagez vos trajets à venir :",
      text: "Dans la séction vos trajets vous pouvez partager vos trajets à venir et permettre à d'autres motard(e)s de vous rejoindre !",
    },
    {
      title: "Gardez le contact !",
      text: "Vous pouvez ajouter des utilisateurs en ami pour pouvoir suivre leurs trajets futurs et rouler avec eux !",
    },
    {
      title: "Faites de nouvelles rencontres motardesques !",
      text: "En effet dans la section Home cochez Découvrir pour voir de nouveaux trajets !",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.page}>
            {index === 1 && (
              <Image
                source={require("../../assets/motoAcceuil.jpg")}
                style={styles.image}
              />
            )}
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.text}>{slide.text}</Text>
            {index === 2 && (
              <TouchableOpacity
                style={styles.startButton}
                onPress={() => navigation.navigate("Tabs")}
              >
                <Text style={styles.startButtonText}>Commencer</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
      {renderPagination()}
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate("Tabs")}
      >
        <Text style={styles.skipText}>Passer</Text>
        <FontAwesomeIcon icon={faArrowRight} size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    width,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "black",
  },
  inactiveDot: {
    backgroundColor: "gray",
  },
  skipButton: {
    position: "absolute",
    top: 60,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  skipText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  startButton: {
    marginTop: 20,
    paddingHorizontal: 70,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "#FFCC33",
  },
  startButtonText: {
    fontSize: 16,
    color: "black",
  },
});
