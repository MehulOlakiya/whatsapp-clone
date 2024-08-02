import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import contacts from "@/assets/data/contacts.json";
import { AlphabetList } from "react-native-section-alphabet-list";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Page = () => {
  const data = contacts.map((contact, index) => ({
    value: `${contact.first_name} ${contact.last_name}`,
    name: `${contact.first_name} ${contact.last_name}`,
    img: contact.img,
    desc: contact.desc,
    key: `${contact.first_name} ${contact.last_name}-${index}`,
  }));
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [item, setItem] = useState(data);
  useEffect(() => {
    navigation.setOptions({
      //   headerShown: false,
      presentation: "modal",
      title: "New Chat",
      //   headerTransparent: true,
      headerStyle: {
        backgroundColor: Colors.background,
      },
      headerTintColor: Colors.primary,
      headerSearchBarOptions: {
        placeholder: "Search name or number",
        hideWhenScrolling: false,
        headerIconColor: Colors.primary,
        onChangeText: (event: any) => {
          //   console.log("eve", JSON.stringify(event.target, null, 2));
          setSearchText(event.nativeEvent.text);
        },
      },
      headerRight: () => (
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={24} color={Colors.primary} />
        </TouchableOpacity>
      ),
    });
  }, []);

  useEffect(() => {
    const newItems = data.filter((i) => i.name.includes(searchText));
    setItem(newItems);
  }, [searchText]);

  return (
    <View
      style={{ paddingTop: 10, backgroundColor: Colors.background, flex: 1 }}
    >
      {item.length === 0 && (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 100,
          }}
        >
          <Text
            style={{ fontSize: 18, textAlign: "center", fontWeight: "400" }}
          >
            No results found
          </Text>
        </View>
      )}
      {item.length > 0 && (
        <AlphabetList
          data={item}
          stickySectionHeadersEnabled
          showsVerticalScrollIndicator={true}
          indexLetterStyle={{
            color: Colors.background,
            fontSize: 14,
          }}
          indexContainerStyle={{
            width: 24,
            backgroundColor: Colors.background,
          }}
          style={{
            marginLeft: 14,
          }}
          renderCustomSectionHeader={(section) => (
            <View style={styles.sectionHeaderContainer}>
              <Text>{section.title}</Text>
            </View>
          )}
          renderCustomItem={(item: any) => (
            <>
              <View style={styles.listItemContainer}>
                <Image
                  source={{ uri: item.img }}
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                />
                <View>
                  <Text style={{ color: "#000", fontSize: 14 }}>
                    {item.value}
                  </Text>
                  <Text style={{ color: Colors.gray, fontSize: 12 }}>
                    {item.desc.length > 40
                      ? `${item.desc.substring(0, 40)}...`
                      : item.desc}
                  </Text>
                </View>
              </View>
              <View style={[defaultStyles.separator]} />
            </>
          )}
          // renderCustomSectionHeader={(section) => (
          //   <View style={styles.sectionHeaderContainer}>
          //     <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
          //   </View>
          // )}
        />
      )}
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  sectionHeaderContainer: {
    height: 30,
    backgroundColor: Colors.background,
    justifyContent: "center",
    paddingHorizontal: 14,
  },
  listItemContainer: {
    flex: 1,
    paddingHorizontal: 14,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
  },
});
