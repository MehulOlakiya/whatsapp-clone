import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Settings",
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
              <TouchableOpacity>
                <Ionicons name="search" color={Colors.primary} size={30} />
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
