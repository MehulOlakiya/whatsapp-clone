import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import welcomeImage from "@/assets/images/welcome.png";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
const welcome_image = Image.resolveAssetSource(welcomeImage).uri;

const Page = () => {
  const openLink = () => {
    Linking.openURL("https://www.gooogle.com");
  };
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image source={{ uri: welcome_image }} style={styles.welcome} />
        <Text style={styles.headline}>Welcome to WhatsApp Clone</Text>
        <Text style={styles.description}>
          Read our{" "}
          <Text style={styles.link} onPress={openLink}>
            Privacy Policy
          </Text>
          .{'Tap "Agree & Continue" to accept the '}
          <Text style={styles.link} onPress={openLink}>
            Term of Service
          </Text>
          .
        </Text>
        <Link href={"/otp"} replace asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Agree & Continue</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  welcome: {
    width: "100%",
    height: 300,
    marginBottom: 80,
  },
  headline: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 80,
    color: Colors.gray,
  },
  link: {
    color: Colors.primary,
  },
  button: {
    width: "100%",
    alignItems: "center",
    // borderRadius:15,
    // borderWidth:1,
    // padding:15,
    // backgroundColor:Colors.primary
  },
  buttonText: {
    fontSize: 22,
    color: Colors.primary,
    textAlign: "center",
  },
});
