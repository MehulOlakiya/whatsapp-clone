import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { defaultStyles } from "@/constants/Styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaskInput from "react-native-mask-input";
import {
  isClerkAPIResponseError,
  useSignIn,
  useSignUp,
} from "@clerk/clerk-expo";
import { StatusBar } from "expo-status-bar";

const IND_PHONE = [
  `+`,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const router = useRouter();
  const { bottom } = useSafeAreaInsets();

  const { signUp, setActive } = useSignUp();
  const { signIn } = useSignIn();
  const openLink = () => {
    Linking.openURL("https://www.gooogle.com");
  };

  const sendOTP = async () => {
    setLoading(true);
    try {
      await signUp!.create({
        phoneNumber,
      });
      await signUp!.preparePhoneNumberVerification();
      router.push(`verify/${phoneNumber}`);
    } catch (error) {
      console.log("err", JSON.stringify(error, null, 2));
      if (isClerkAPIResponseError(error)) {
        if (error.errors[0].code === "form_identifier_exists") {
          console.log("user exits");
          await trySignIn();
        } else {
          setLoading(false);
          Alert.alert("Error", error.errors[0].message);
        }
      }
    }
  };
  const trySignIn = async () => {
    try {
      const { supportedFirstFactors } = await signIn!.create({
        identifier: phoneNumber,
      });
      const firstPhoneFactor: any = supportedFirstFactors.find(
        (factor: any) => {
          return factor.strategy === "phone_code";
        }
      );
      const { phoneNumberId } = firstPhoneFactor;
      await signIn!.prepareFirstFactor({
        strategy: "phone_code",
        phoneNumberId,
      });
      router.push(`/verify/${phoneNumber}?signin=true`);
      setLoading(false);
    } catch (error) {}
  };
  return (
    <>
      <StatusBar style="dark" />
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.container}>
          {loading && (
            <View style={[StyleSheet.absoluteFill, styles.loading]}>
              <ActivityIndicator size="large" color={Colors.primary} />
              <Text style={{ fontSize: 18, padding: 10 }}>Sending code...</Text>
            </View>
          )}
          <Text style={styles.description}>
            WhatsApp will need to verify your account.Carrier charges may apply.
          </Text>
          <View style={styles.list}>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>India</Text>
              <Ionicons name="chevron-forward" size={24} color={Colors.gray} />
            </View>
            <View style={defaultStyles.separator} />
            <MaskInput
              style={styles.input}
              value={phoneNumber}
              keyboardType="numeric"
              autoFocus
              placeholder="+91 your phone number"
              onChangeText={(masked, unmasked) => {
                setPhoneNumber(masked);
              }}
              mask={IND_PHONE}
            />
          </View>
          <Text style={styles.legal}>
            You must be{" "}
            <Text style={styles.link} onPress={openLink}>
              at least 16 years old{" "}
            </Text>{" "}
            to register. Learn how WhatApp works with the{" "}
            <Text style={styles.link} onPress={openLink}>
              Meta Companies
            </Text>
            .
          </Text>
          <View style={{ flex: 1 }}></View>
          <TouchableOpacity
            onPress={sendOTP}
            style={[
              styles.button,
              phoneNumber !== "" ? styles.enabled : null,
              { marginBottom: bottom },
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                phoneNumber !== "" ? styles.enabled : null,
              ]}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
    gap: 20,
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
  },
  list: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 10,
    padding: 10,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 6,
    marginBottom: 10,
  },
  listItemText: {
    fontSize: 20,
    color: Colors.primary,
  },
  legal: {
    fontSize: 12,
    textAlign: "center",
    color: "#000",
  },
  link: {
    color: Colors.primary,
  },
  button: {
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.lightGray,
    padding: 10,
    borderRadius: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
    color: "#fff",
  },
  buttonText: {
    fontSize: 22,
    color: Colors.gray,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    fontSize: 16,
    padding: 6,
    marginTop: 10,
  },
  loading: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
