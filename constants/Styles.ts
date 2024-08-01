import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
  block: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 14,
    marginTop: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    gap: 10,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.lightGray,
    marginLeft: 50,
  },
});
