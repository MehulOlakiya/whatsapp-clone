import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import contacts from "@/assets/data/contacts.json";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { defaultStyles } from "@/constants/Styles";
import StoryImage from "@/components/StoryImage";

const Page = () => {
  const data = contacts.slice(0, 5);
  const viewUpdateData = contacts.slice(10, 17);
  const channelData = contacts.slice(15, 22);
  const [showViewUpdate, setShowViewUpdate] = useState(false);
  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            flex: 0.8,
            paddingBottom: 100,
          }}
        >
          <View
            style={{
              paddingLeft: 20,
              marginTop: 25,
            }}
          >
            <Text
              style={{ fontSize: 22, fontWeight: "400", textAlign: "left" }}
            >
              Status
            </Text>
          </View>
          <View style={{ marginTop: 30, paddingLeft: 20 }}>
            <View style={{ flexDirection: "row", gap: 12 }}>
              <Image
                source={{
                  uri: "https://i.pravatar.cc/150?u=duncanlivingston@genmy.com",
                }}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                }}
              />
              <View style={{ gap: 2, justifyContent: "center" }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "300",
                    textAlign: "left",
                  }}
                >
                  My Status
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    textAlign: "center",
                    color: Colors.gray,
                  }}
                >
                  Tap to add status update
                </Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 20, paddingLeft: 20 }}>
            <Text
              style={{ fontSize: 18, textAlign: "left", color: Colors.gray }}
            >
              Recent updates
            </Text>
          </View>
          <FlatList
            data={data}
            contentInsetAdjustmentBehavior="automatic"
            scrollEnabled={false}
            keyExtractor={(item) => item.desc}
            renderItem={({ item, index }) => (
              <View
                style={{
                  marginTop: 20,
                  paddingLeft: 20,
                }}
              >
                <View style={{ flexDirection: "row", gap: 12 }}>
                  {/* <Image
                  source={{
                    uri: item.img,
                  }}
                  resizeMode="cover"
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                    borderColor: "red",
                    borderWidth: 2,
                  }}
                /> */}
                  <StoryImage stories={5} image={item.img} key={index} />
                  <View style={{ gap: 2, justifyContent: "center" }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "300",
                        textAlign: "left",
                      }}
                    >
                      {item.first_name} {item.last_name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: "left",
                        color: Colors.gray,
                      }}
                    >
                      {Math.floor(Math.random() * 10 + 1)}:25 pm
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />

          <TouchableOpacity
            style={{
              marginTop: 20,
              paddingLeft: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
              paddingRight: 20,
            }}
            onPress={() => setShowViewUpdate(!showViewUpdate)}
          >
            <Text
              style={{ fontSize: 18, textAlign: "left", color: Colors.gray }}
            >
              Viewed updates
            </Text>
            <MaterialIcons
              name={
                showViewUpdate ? "keyboard-arrow-up" : "keyboard-arrow-down"
              }
              size={28}
              color={Colors.gray}
            />
          </TouchableOpacity>
          {!showViewUpdate && (
            <View
              style={[
                defaultStyles.separator,
                { marginLeft: 0, borderColor: Colors.gray },
              ]}
            />
          )}
          {showViewUpdate && (
            <FlatList
              data={viewUpdateData}
              contentInsetAdjustmentBehavior="automatic"
              scrollEnabled={false}
              keyExtractor={(item) => item.desc}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    marginTop: 20,
                    paddingLeft: 20,
                  }}
                >
                  <View style={{ flexDirection: "row", gap: 12 }}>
                    <View
                      style={{
                        height: 64,
                        width: 64,
                      }}
                    >
                      <Image
                        source={{
                          uri: item.img,
                        }}
                        resizeMode="cover"
                        style={{
                          height: 60,
                          width: 60,
                          borderRadius: 30,
                          borderWidth: 2,
                          borderColor: Colors.lightGray,
                        }}
                      />
                    </View>
                    <View style={{ gap: 2, justifyContent: "center" }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "300",
                          textAlign: "left",
                        }}
                      >
                        {item.first_name} {item.last_name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          textAlign: "left",
                          color: Colors.gray,
                        }}
                      >
                        {Math.floor(Math.random() * 10 + 1)}:25 pm
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            />
          )}

          <View
            style={{
              paddingLeft: 20,
              marginTop: 25,
            }}
          >
            <Text
              style={{ fontSize: 22, fontWeight: "400", textAlign: "left" }}
            >
              Channels
            </Text>
          </View>
          <View
            style={{
              paddingLeft: 20,
              marginTop: 6,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "300",
                textAlign: "left",
                color: Colors.gray,
              }}
            >
              Stay updated on topics that matter to you. Find channels to follow
              below.
            </Text>
          </View>
          <View
            style={{
              paddingLeft: 20,
              marginTop: 25,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "300",
                textAlign: "left",
                color: Colors.gray,
              }}
            >
              Find channels to follow
            </Text>
          </View>

          <FlatList
            data={channelData}
            contentInsetAdjustmentBehavior="automatic"
            scrollEnabled={false}
            keyExtractor={(item) => item.desc}
            renderItem={({ item, index }) => (
              <View
                style={{
                  marginTop: 20,
                  paddingLeft: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingRight: 30,
                }}
              >
                <View style={{ flexDirection: "row", gap: 12 }}>
                  <Image
                    source={{
                      uri: item.img,
                    }}
                    style={{
                      height: 60,
                      width: 60,
                      borderRadius: 30,
                    }}
                  />
                  <View style={{ gap: 2, justifyContent: "center" }}>
                    <View
                      style={{
                        flex: 1,
                        gap: 2,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "300",
                          textAlign: "left",
                        }}
                      >
                        {item.first_name} {item.last_name}
                      </Text>
                      <View>
                        <Image
                          source={require("@/assets/images/blue.png")}
                          style={{
                            height: 20,
                            width: 20,
                            flex: 1,
                          }}
                        />
                      </View>
                    </View>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: "left",
                        color: Colors.gray,
                      }}
                    >
                      1.6M followers
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: Colors.lightGray,
                    paddingVertical: 8,
                    paddingHorizontal: 18,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      color: Colors.primary,
                    }}
                  >
                    Follow
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <View
            style={{
              flex: 1,
              marginLeft: 20,
              width: 200,
              marginTop: 15,
            }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 24,
                borderWidth: 1,
                borderColor: Colors.lightGray,
                paddingVertical: 14,
                paddingHorizontal: 16,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  color: Colors.primary,
                }}
              >
                Explore more
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 30,
          right: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: Colors.muted,
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            width: 40,
            flex: 1,
            borderRadius: 12,
            padding: 8,
          }}
        >
          <Ionicons name="pencil" size={24} color="#fff" />
        </View>
        <View
          style={{
            marginTop: 5,
            backgroundColor: Colors.primary,
            alignItems: "center",
            justifyContent: "center",
            height: 60,
            width: 60,
            flex: 1,
            borderRadius: 15,
            padding: 10,
          }}
        >
          <Ionicons name="camera-outline" size={30} color="#fff" />
        </View>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({});
