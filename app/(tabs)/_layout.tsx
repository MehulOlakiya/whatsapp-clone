import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs, useSegments } from "expo-router";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
  const segments = useSegments();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="inverted" animated={true} translucent={true} />
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.background,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            marginBottom: 10,
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveBackgroundColor: Colors.background,
          tabBarActiveBackgroundColor: Colors.background,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
        }}
      >
        <Tabs.Screen
          name="updates"
          options={{
            title: "Updates",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="update" size={size} color={color} />
            ),
            tabBarStyle: {
              backgroundColor: Colors.background,
              height: 60,
            },
          }}
        />
        <Tabs.Screen
          name="calls"
          options={{
            title: "Calls",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="phone-outline"
                size={size}
                color={color}
              />
            ),
            tabBarStyle: {
              backgroundColor: Colors.background,
              height: 60,
            },
          }}
        />
        <Tabs.Screen
          name="communities"
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="people" size={size} color={color} />
            ),
            tabBarStyle: {
              backgroundColor: Colors.background,
              height: 60,
            },
          }}
        />
        <Tabs.Screen
          name="chats"
          options={{
            title: "Chats",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="chatbubbles" size={size} color={color} />
            ),
            tabBarStyle: {
              backgroundColor: Colors.background,
              display: segments[2] === "[id]" ? "none" : "flex",
              height: 60,
            },
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="cog" size={size} color={color} />
            ),
            tabBarStyle: {
              backgroundColor: Colors.background,
              height: 60,
            },
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
};

export default Layout;

const styles = StyleSheet.create({});
