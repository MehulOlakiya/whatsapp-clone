import chats from "@/assets/data/chats.json";
import ChatRow from "@/components/ChatRow";
import SearchBar from "@/components/SearchBar";
import { defaultStyles } from "@/constants/Styles";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
const Page = () => {
  const router = useRouter();
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        paddingBottom: 40,
        backgroundColor: "#fff",
      }}
    >
      <SearchBar onPress={() => router.push("/(models)/search-chat")} />
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        ItemSeparatorComponent={() => (
          <View style={[defaultStyles.separator]} />
        )}
        renderItem={({ item, index }) => <ChatRow {...item} />}
      />
    </ScrollView>
  );
};

export default Page;

const styles = StyleSheet.create({});
