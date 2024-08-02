import { Image } from "expo-image";
import { Alert, TouchableOpacity, View } from "react-native";
import IconButton from "./IconButton";
import { saveToLibraryAsync } from "expo-media-library";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const CONTAINER_PADDING = 6;
const CONTAINER_WIDTH = 60;
const ICON_SIZE = 25;

interface PictureViewProps {
  picture: string;
  setPicture: React.Dispatch<React.SetStateAction<string>>;
}
export default function PictureView({ picture, setPicture }: PictureViewProps) {
  const router = useRouter();
  return (
    <Animated.View
      layout={LinearTransition}
      entering={FadeIn}
      exiting={FadeOut}
    >
      {/* <View
        style={{
          position: "absolute",
          right: 6,
          zIndex: 1,
          paddingTop: 50,
          gap: 16,
        }}
      >
        <IconButton
          onPress={async () => {
            saveToLibraryAsync(picture);
            Alert.alert("✅ Picture saved!");
          }}
          androidName="close"
        />
        <IconButton onPress={() => setPicture("")} androidName="close" />
        <IconButton onPress={() => setPicture("")} androidName="close" />
        <IconButton onPress={() => setPicture("")} androidName="close" />
        <IconButton androidName="close" />
      </View> */}

      <View
        style={{
          position: "absolute",
          zIndex: 1,
          paddingTop: 50,
          left: 6,
        }}
      >
        <IconButton onPress={() => setPicture("")} androidName="close" />
      </View>
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          bottom: 40,
          right: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Photo send Successfully.");
            router.replace("/(tabs)/chats");
          }}
          activeOpacity={0.5}
          style={[
            {
              backgroundColor: "#00000050",
              padding: CONTAINER_PADDING,
              borderRadius: (CONTAINER_WIDTH + CONTAINER_PADDING * 2) / 2,
              width: CONTAINER_WIDTH,
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <Ionicons size={35} name="send" style={{}} color={"white"} />
        </TouchableOpacity>
      </View>
      <Image
        source={picture}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: 5,
        }}
      />
    </Animated.View>
  );
}
