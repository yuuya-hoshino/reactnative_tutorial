import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleButtonPress = () => {
    // ここで入力された値を使って何かを行う（例：データ送信など）
    console.log('入力された値:', inputValue);
    // 入力フォームをクリアする
    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Islamと一緒にご飯を食べる細江</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleInputChange}
        placeholder="ここに入力してください"
      />
      <Button title="送信" onPress={handleButtonPress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF00FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 20,
  },
});
