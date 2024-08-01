import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { defaultStyles } from "@/constants/Styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";

const Page = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.background }}>
      <View
        style={{
          marginTop: 20,
          padding: 20,
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <View
            style={{
              backgroundColor: Colors.lightGray,
              height: 60,
              width: 60,
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              borderRadius: 8,
            }}
          >
            <MaterialIcons name="people" size={45} color="white" />
          </View>
          <Text
            style={{ fontSize: 20, fontWeight: "300", textAlign: "center" }}
          >
            New community
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 8,
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
          }}
        >
          <View
            style={{
              padding: 20,
              backgroundColor: "#fff",
              alignItems: "center",
              flexDirection: "row",
              paddingLeft: 30,
              gap: 18,
            }}
          >
            <Image
              source={require("@/assets/images/bull.jpeg")}
              style={{ height: 40, width: 40 }}
            />
            <Text
              style={{ fontSize: 18, fontWeight: "300", textAlign: "center" }}
            >
              Impact trading analysis 1E{" "}
            </Text>
          </View>
          <View
            style={[
              defaultStyles.separator,
              { marginLeft: 0, borderColor: Colors.gray },
            ]}
          />
          <View
            style={{
              marginTop: 10,
              paddingLeft: 30,
              padding: 20,
              flexDirection: "row",
              gap: 15,
              alignItems: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                height: 50,
                width: 50,
                justifyContent: "center",
                borderRadius: 8,
                borderWidth: 1,
                borderColor: Colors.gray,
              }}
            >
              <AntDesign name="CodeSandbox" size={40} color={Colors.primary} />
            </View>

            <View style={{ gap: 5 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "300", textAlign: "left" }}
                >
                  Announcements
                </Text>
                <Text style={{ fontSize: 14, textAlign: "center" }}>
                  8:52am
                </Text>
              </View>
              <Text style={{ fontSize: 16 }}>
                ~Impact Trading and Training: Global Spr...
              </Text>
            </View>
            {/* View all */}
          </View>
          <TouchableOpacity
            style={{
              paddingLeft: 30,
              marginVertical: 15,
              flexDirection: "row",
              gap: 30,
              alignItems: "center",
            }}
          >
            <MaterialIcons
              name="keyboard-arrow-right"
              size={28}
              color={Colors.gray}
            />
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                color: Colors.gray,
              }}
            >
              View all
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Page;

const styles = StyleSheet.create({});
