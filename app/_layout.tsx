import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Link, Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { View, Text, TouchableOpacity } from "react-native";
import Page from "./index";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (error) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (error) {}
  },
};

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    console.log("isSignedIn", isSignedIn);
    if (!isLoaded) return;
    const inAuthGroup = segments[0] === "(tabs)";
    if (isSignedIn && !inAuthGroup) {
      router.replace("/(tabs)/chats");
    } else if (!isSignedIn) {
      router.replace("/");
    }
  }, [isSignedIn]);

  if (!loaded || !isLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="otp"
          options={{
            headerTitle: "Enter Your Phone Number",
            headerBackVisible: false,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="verify/[phone]"
          options={{
            headerTitle: "Verify Your Phone Number",
            headerTitleAlign: "center",
            headerBackTitle: "Edit number",
            headerBackVisible: true,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(models)/new-chat"
          options={{
            //   headerShown: false,
            presentation: "modal",
            title: "New Chat",
            //   headerTransparent: true,
            headerStyle: {
              backgroundColor: Colors.background,
            },
            headerSearchBarOptions: {
              placeholder: "Search name or number",
              hideWhenScrolling: false,
            },
            headerRight: () => (
              <TouchableOpacity>
                <Ionicons
                  name="ellipsis-vertical"
                  size={24}
                  color={Colors.gray}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="(models)/search-chat"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(models)/camera"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
};

const RootLayoutNav = () => {
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY!}
      tokenCache={tokenCache}
    >
      <InitialLayout />
      <StatusBar style="inverted" backgroundColor="#000" />
    </ClerkProvider>
  );
};
export default RootLayoutNav;
