import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles';
import BoxedIcon from './BoxedIcon';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const SettingFlatList = ({data}:{data:any}) => {
  return (
    <FlatList
      data={data}
      scrollEnabled={false}
      ItemSeparatorComponent={() => <View style={defaultStyles.separator} />}
      renderItem={({ item }) => (
        <View style={defaultStyles.item}>
          <BoxedIcon name={item.icon} backgroundColor={item.backgroundColor} />
          <Text style={{ fontSize: 18, flex: 1 }}>{item.name}</Text>
          <Ionicons name="chevron-forward" size={20} color={Colors.gray} />
        </View>
      )}
    />
  );
}

export default SettingFlatList

const styles = StyleSheet.create({})