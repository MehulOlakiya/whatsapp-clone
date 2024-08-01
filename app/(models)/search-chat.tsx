import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Ionicons } from "@expo/vector-icons";
import { defaultStyles } from "@/constants/Styles";
import ChatRow from "@/components/ChatRow";
import chats from "@/assets/data/chats.json";
import { useRouter } from "expo-router";

const Page = () => {
  const [text, setText] = useState("");
  const { top } = useSafeAreaInsets();
  const [items, setItems] = useState(chats);
  const router = useRouter();
  useEffect(() => {
    setItems([]);
    const newChats = chats.filter(
      (i) => i.from.includes(text) || i.msg.includes(text)
    );
    setItems([...newChats]);
  }, [text]);
  return (
    <View style={{ marginTop: top, backgroundColor: "#fff", flex: 1 }}>
      <View>
        <View
          style={{
            padding: 14,
            // borderWidth: 1,
            marginVertical: 10,
            borderRadius: 35,
            marginHorizontal: 8,
            backgroundColor: Colors.lightGray,
          }}
        >
          <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={20} color={Colors.gray} />
            </TouchableOpacity>
            <TextInput
              style={{ fontSize: 16, color: Colors.gray }}
              placeholder="Search...."
              placeholderTextColor={Colors.gray}
              autoFocus={true}
              cursorColor={Colors.primary}
              value={text}
              onChangeText={(value) => setText(value)}
            />
            {text.length > 0 && (
              <TouchableOpacity
                style={{ flex: 1, alignItems: "flex-end", paddingRight: 8 }}
                onPress={() => setText("")}
              >
                <Ionicons name="close-sharp" size={24} color={Colors.gray} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      {text.length === 0 && (
        <View
          style={{
            padding: 10,
            marginTop: 6,
            marginHorizontal: 6,
          }}
        >
          <View style={{ flexDirection: "row", gap: 6, marginBottom: 8 }}>
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="android-messages"
                size={24}
                color={Colors.gray}
              />
              <Text style={styles.iconText}>Unread</Text>
            </View>
            <View style={styles.icon}>
              <MaterialIcons
                name="insert-photo"
                size={24}
                color={Colors.gray}
              />
              <Text style={styles.iconText}>Photos</Text>
            </View>
            <View style={styles.icon}>
              <Ionicons name="videocam-outline" size={24} color={Colors.gray} />
              <Text style={styles.iconText}>Videos</Text>
            </View>
            <View style={styles.icon}>
              <Ionicons name="link-sharp" size={24} color={Colors.gray} />
              <Text style={styles.iconText}>Links</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 6 }}>
            <View style={styles.icon}>
              <MaterialIcons name="gif" size={24} color={Colors.gray} />
              <Text style={styles.iconText}>GIFs</Text>
            </View>
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="headphones"
                size={24}
                color={Colors.gray}
              />
              <Text style={styles.iconText}>Audio</Text>
            </View>
            <View style={styles.icon}>
              <Ionicons
                name="document-text-outline"
                size={24}
                color={Colors.gray}
              />
              <Text style={styles.iconText}>Documents</Text>
            </View>
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="poll"
                size={24}
                color={Colors.gray}
              />
              <Text style={styles.iconText}>Polls</Text>
            </View>
          </View>
        </View>
      )}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          paddingBottom: 40,
          backgroundColor: "#fff",
        }}
      >
        {items.length > 0 && (
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            ItemSeparatorComponent={() => (
              <View style={[defaultStyles.separator]} />
            )}
            renderItem={({ item, index }) => <ChatRow key={index} {...item} />}
          />
        )}
        {items.length === 0 && (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 100,
            }}
          >
            <Text
              style={{ fontSize: 16, textAlign: "center", fontWeight: "400" }}
            >
              No results found
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  icon: {
    flexDirection: "row",
    gap: 5,
    backgroundColor: Colors.lightGray,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 18,
    alignItems: "center",
  },
  iconText: {
    textAlign: "center",
    color: Colors.gray,
    fontSize: 14,
  },
});
