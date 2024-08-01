import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SearchBar = ({ onPress }: { onPress: any }) => {
  return (
    <TouchableOpacity
      style={{
        padding: 14,
        // borderWidth: 1,
        marginVertical: 10,
        borderRadius: 30,
        marginHorizontal: 8,
        backgroundColor: Colors.lightGray,
      }}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
        <Ionicons name="search" size={22} color={Colors.gray} />
        <Text style={{ fontSize: 16, textAlign: "center", color: Colors.gray }}>
          Search...
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
