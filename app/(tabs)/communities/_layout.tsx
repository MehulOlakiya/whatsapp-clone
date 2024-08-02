import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, router, Stack } from "expo-router";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Communities",
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
              <TouchableOpacity>
                <Ionicons
                  name="ellipsis-horizontal-circle-outline"
                  color={Colors.primary}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({});
