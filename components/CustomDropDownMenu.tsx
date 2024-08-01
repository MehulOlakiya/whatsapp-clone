import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { Entypo, Ionicons } from "@expo/vector-icons";
import {
  Block,
  Mute,
  Follow,
  Why,
  Question,
  NotInterested,
} from "./CustomContexts";
import Colors from "@/constants/Colors";
const Divider = () => <View style={styles.divider} />;
const CustomDropDownMenu = () => {
  return (
    <MenuProvider style={styles.container}>
      <Menu>
        <MenuTrigger
          customStyles={{
            triggerWrapper: {
              top: -20,
            },
          }}
        >
          <Ionicons
            name="ellipsis-horizontal-circle-outline"
            color={Colors.primary}
            size={30}
          />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={() => alert(`Save`)} text="Save" />
          <MenuOption onSelect={() => alert(`Delete`)} text="Delete" />
        </MenuOptions>
      </Menu>
    </MenuProvider>
  );
};

export default CustomDropDownMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    flexDirection: "column",
    position: "absolute",
    left: 0,
    top: 3,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#7F8487",
  },
});
