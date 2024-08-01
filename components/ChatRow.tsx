import Colors from "@/constants/Colors";
import { format } from "date-fns";
import { useRouter } from "expo-router";
import React, { FC } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import ChatSwipeableRow from "./ChatSwipebleRow";

export interface ChatRowProps {
  id: string;
  from: string;
  date: string;
  img: string;
  msg: string;
  read: boolean;
  unreadCount: number;
}

const ChatRow: FC<ChatRowProps> = ({
  id,
  from,
  date,
  img,
  read,
  msg,
  unreadCount,
}) => {
  const router = useRouter();
  return (
    <ChatSwipeableRow>
      {/* <Link href={`/(tabs)/chats/${id}`} asChild> */}
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={Colors.lightGray}
        onPress={() => router.push(`/(tabs)/chats/${id}`)}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 14,
            paddingLeft: 20,
            paddingVertical: 10,
          }}
        >
          <Image
            source={{ uri: img }}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{from}</Text>
            <Text style={{ fontSize: 16, color: Colors.gray }}>
              {msg.length > 40 ? `${msg.substring(0, 40)}...` : msg}
            </Text>
          </View>
          <View
            style={{
              alignSelf: "flex-start",
            }}
          >
            <Text
              style={[
                {
                  color: unreadCount > 0 ? Colors.primary : Colors.gray,

                  paddingRight: 20,
                  alignSelf: "flex-start",
                },
              ]}
            >
              {format(date, "MM.dd.yy")}
            </Text>
            {unreadCount > 0 && (
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: Colors.primary,
                  height: 24,
                  width: 24,
                  borderRadius: 12,
                  justifyContent: "center",
                  marginLeft: 22,
                }}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  {unreadCount}
                </Text>
              </View>
            )}
          </View>
        </View>
      </TouchableHighlight>
      {/* </Link> */}
    </ChatSwipeableRow>
  );
};

export default ChatRow;

const styles = StyleSheet.create({});
