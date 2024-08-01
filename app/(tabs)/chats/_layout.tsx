import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack, useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import CustomDropDownMenu from "@/components/CustomDropDownMenu";

const Layout = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "WhatsApp",
          headerLargeTitle: true,
          headerBackVisible: true,
          headerBackTitle: "Back",
          headerShadowVisible: false,
          //   headerTitleAlign:'center',
          //   headerTransparent:true,
          headerBlurEffect: "regular",
          // headerShadowVisible:false,
          headerBackTitleVisible: true,

          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTitleStyle: {
            fontSize: 24,
            color: Colors.primary,
          },

          //   headerSearchBarOptions: {
          //     placeholder: "Search",
          //   },
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 20 }}>
              <TouchableOpacity onPress={() => router.push("/(models)/camera")}>
                <Ionicons
                  name="camera-outline"
                  color={Colors.primary}
                  size={30}
                />
              </TouchableOpacity>
              <Link href="/(models)/new-chat" asChild>
                <TouchableOpacity>
                  <Ionicons
                    name="add-circle"
                    color={Colors.primary}
                    size={30}
                  />
                </TouchableOpacity>
              </Link>
              <TouchableOpacity onPress={() => <CustomDropDownMenu />}>
                <Ionicons
                  name="ellipsis-horizontal-circle-outline"
                  color={Colors.primary}
                  size={30}
                />
              </TouchableOpacity>
              {/* <CustomDropDownMenu /> */}
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "",
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 20 }}>
              <TouchableOpacity>
                <Ionicons
                  name="videocam-outline"
                  color={Colors.primary}
                  size={30}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="call-outline"
                  color={Colors.primary}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),

          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({});
