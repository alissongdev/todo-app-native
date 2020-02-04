import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (value) => {
    setText(value);
  }

  return (
    <View style={styles.content}>
      <TextInput 
      style={styles.input} 
      placeholder='Nova tarefa...' 
      onChangeText={changeHandler} 
      />
      <TouchableOpacity style={styles.add} onPress={() => submitHandler(text)}>
        <MaterialIcons name="add-box" size={40} color="tomato" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 20,
  },
  input: {
    flex: 1,
    padding: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    paddingLeft: 15,
    paddingRight: 15,
    border: 1,
    borderStyle: 'solid',
    borderColor: '#eee',
  },
  add : {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  }
});