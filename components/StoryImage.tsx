import Colors from "@/constants/Colors";
import { Text, View, StyleSheet, Image } from "react-native";
export const StoryImage = ({
  stories,
  image,
}: {
  stories: any;
  image: any;
}) => {
  let arr = [];
  for (let i = 0; i < stories; i++) {
    arr.push(i);
  }

  return (
    <View
      style={{
        backgroundColor: Colors.primary,
        borderRadius: 42,
        width: 65,
        height: 65,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        overflow: "hidden",
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 60,
          height: 60,
          marginTop: 2.5,
          zIndex: 1,
          borderRadius: 40,
          borderWidth: 2,
          borderColor: "white",
        }}
      />

      {stories > 1 &&
        arr.map((ste, ind) => {
          return (
            <View
              style={{
                backgroundColor: "white",
                height: 42,
                width: 2,
                position: "absolute",
                left: ind === 0 ? 24 : 25,

                transform: [
                  { translateX: -1 },
                  { translateY: 20 },
                  {
                    rotate: `${(360 / stories) * ind}deg`,
                  },
                  { translateX: 1 },
                  { translateY: -20 },
                ],
              }}
            />
          );
        })}
    </View>
  );
};

export default StoryImage;
