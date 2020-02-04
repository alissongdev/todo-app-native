import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
  return (
    
    <View style={styles.content}>
      <Text style={styles.item}>{item.text}</Text>
      <TouchableOpacity style={styles.delete} onPress={() => pressHandler(item.key)}>
        <AntDesign name="delete" size={32} color="red" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    padding: 12,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
  delete: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 14,
  }
});