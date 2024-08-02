import { View, Text } from "react-native";
import IconButton from "./IconButton";
import { FlashMode } from "expo-camera";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

interface CameraToolsProps {
  cameraZoom: number;
  cameraFlash: FlashMode;
  cameraTorch: boolean;
  setCameraZoom: React.Dispatch<React.SetStateAction<number>>;
  setCameraFacing: React.Dispatch<React.SetStateAction<"front" | "back">>;
  setCameraTorch: React.Dispatch<React.SetStateAction<boolean>>;
  setCameraFlash: React.Dispatch<React.SetStateAction<FlashMode>>;
}
export default function CameraTools({
  cameraZoom,
  cameraFlash,
  cameraTorch,
  setCameraZoom,
  setCameraFacing,
  setCameraTorch,
  setCameraFlash,
}: CameraToolsProps) {
  const router = useRouter();
  return (
    <>
      <View
        style={{
          position: "absolute",
          right: 6,
          zIndex: 1,
          gap: 16,
        }}
      >
        <IconButton
          onPress={() => setCameraTorch((prevValue) => !prevValue)}
          androidName="flashlight"
        />
        <IconButton
          onPress={() =>
            setCameraFacing((prevValue) =>
              prevValue === "back" ? "front" : "back"
            )
          }
          androidName="camera-reverse-outline"
          width={25}
          height={21}
        />
        <IconButton
          onPress={() =>
            setCameraFlash((prevValue) => (prevValue === "off" ? "on" : "off"))
          }
          androidName={cameraFlash === "off" ? "flash" : "flash-off"}
        />
        <IconButton
          onPress={() => {}}
          // iosName={"speaker.slash"}
          androidName="volume-high"
        />

        <IconButton
          onPress={() => {
            // increment by .01
            if (cameraZoom < 1) {
              setCameraZoom((prevValue) => prevValue + 0.1);
            }
          }}
          androidName="add"
        />
        <Text style={{ color: "#fff", textAlign: "center" }}>
          {cameraZoom.toFixed(1)}x
        </Text>

        <IconButton
          onPress={() => {
            // decrement by .01
            if (cameraZoom > 0) {
              setCameraZoom((prevValue) => prevValue - 0.1);
            }
          }}
          androidName="remove-outline"
        />
      </View>
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          left: 10,
          marginTop: -40,
        }}
      >
        <IconButton onPress={() => router.back()} androidName="close" />
      </View>
    </>
  );
}
