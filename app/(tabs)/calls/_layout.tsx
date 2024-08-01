import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Calls",
          // headerTitleAlign:'center',
          headerLargeTitle: true,
          headerBackVisible: true,
          headerBackTitle: "Back",
          headerTitleAlign:'center',
        //   headerTransparent:true,
          headerBlurEffect:'regular',
          headerLeft: () => (
            <View style={{ marginLeft: 5, marginRight: 30 }}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </View>
          ),
          // headerShadowVisible:false,
          headerBackTitleVisible: true,
          headerStyle: {
            backgroundColor: Colors.background,
            
          },
        
        //   headerSearchBarOptions: {
        //     placeholder: "Search",
        //   },
          headerRight:()=>(
            <TouchableOpacity>
                <Ionicons name="call-outline" color={Colors.primary} size={30}/>
            </TouchableOpacity>
          )
        }}
      />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({});
