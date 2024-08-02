import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState, useCallback, useEffect, useRef } from "react";
import messageData from "@/assets/data/messages.json";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import chats from "@/assets/data/chats.json";
import {
  Bubble,
  GiftedChat,
  IMessage,
  InputToolbar,
  Send,
  SystemMessage,
} from "react-native-gifted-chat";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import ChatMessageBox from "@/components/ChatMessageBox";
import ReplyMessageBar from "@/components/ReplyMessageBar";

const Page = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [text, setText] = useState("");
  const [replyMessage, setReplyMessage] = useState<IMessage | null>(null);
  const swipeableRowRef = useRef<Swipeable | null>(null);

  const insets = useSafeAreaInsets();

  useEffect(() => {
    const userData = chats.filter((i) => i.id === id);
    navigation.setOptions({
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            paddingBottom: 4,
            alignItems: "center",
            width: 220,
          }}
        >
          <Image
            source={{
              uri: userData[0].img,
            }}
            style={{ width: 40, height: 40, borderRadius: 50 }}
          />
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            {userData[0].from}
          </Text>
        </View>
      ),
    });
  }, [id]);

  useEffect(() => {
    setMessages([
      ...messageData.map((message) => {
        return {
          _id: message.id,
          text: message.msg,
          createdAt: new Date(message.date),
          user: {
            _id: message.from,
            name: message.from ? "You" : "Bob",
          },
        };
      }),
    ]);
  }, []);

  useEffect(() => {
    if (replyMessage && swipeableRowRef.current) {
      swipeableRowRef.current.close();
      swipeableRowRef.current = null;
    }
  }, [replyMessage]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const updateRowRef = useCallback(
    (ref: any) => {
      if (
        ref &&
        replyMessage &&
        ref.props.children.props.currentMessage?._id === replyMessage._id
      ) {
        swipeableRowRef.current = ref;
      }
    },
    [replyMessage]
  );

  return (
    <ImageBackground
      source={require("@/assets/images/pattern.png")}
      style={{
        flex: 1,
        marginBottom: insets.bottom,
        backgroundColor: Colors.background,
      }}
    >
      <GiftedChat
        messages={messages}
        onSend={(messages: any) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderAvatar={null}
        bottomOffset={insets.bottom}
        maxComposerHeight={100}
        onInputTextChanged={setText}
        renderSystemMessage={(props) => (
          <SystemMessage {...props} textStyle={{ color: Colors.gray }} />
        )}
        renderBubble={(props) => {
          return (
            <Bubble
              {...props}
              textStyle={{
                right: {
                  color: "#000",
                },
                left: {
                  color: "#000",
                },
              }}
              wrapperStyle={{
                left: {
                  backgroundColor: "#fff",
                },
                right: {
                  backgroundColor: Colors.lightGreen,
                },
              }}
            />
          );
        }}
        renderSend={(props) => (
          <View
            style={{
              flexDirection: "row",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              gap: 15,
              paddingHorizontal: 15,
              marginBottom: 10,
            }}
          >
            {text.length > 0 && (
              <Send
                {...props}
                containerStyle={{
                  justifyContent: "center",
                }}
              >
                <Ionicons name="send" color={Colors.primary} size={28} />
              </Send>
            )}
            {text.length === 0 && (
              <>
                <TouchableOpacity
                  onPress={() => router.push("/(models)/camera")}
                >
                  <Ionicons
                    name="camera-outline"
                    color={Colors.primary}
                    size={28}
                  />
                </TouchableOpacity>

                <Ionicons name="mic-outline" color={Colors.primary} size={28} />
              </>
            )}
          </View>
        )}
        textInputProps={styles.composer}
        renderInputToolbar={(props) => (
          <InputToolbar
            {...props}
            containerStyle={{ backgroundColor: Colors.background }}
            renderActions={() => (
              <View
                style={{
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  left: 6,
                }}
              >
                <Ionicons name="add" color={Colors.primary} size={28} />
              </View>
            )}
          />
        )}
        renderMessage={(props) => (
          <ChatMessageBox
            {...props}
            updateRowRef={updateRowRef}
            setReplyOnSwipeOpen={setReplyMessage}
          />
        )}
        renderChatFooter={() => (
          <ReplyMessageBar
            clearReply={() => setReplyMessage(null)}
            message={replyMessage}
          />
        )}
      />
    </ImageBackground>
  );
};

export default Page;

const styles = StyleSheet.create({
  composer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    paddingHorizontal: 14,
    fontSize: 16,
    marginVertical: 4,
    marginBottom: 13,
    // paddingTop: 8,
  },
});
