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
      <Text style={styles.text}>アカウント登録</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleInputChange}
        placeholder="ここに入力してください"
      />
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleInputChange}
        placeholder="ここに入力してください"
      />
      <Button title="ログインはこちら" onPress={handleButtonPress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 150,
    marginBottom: 20,
  },
  input: {
    width: '50%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});
