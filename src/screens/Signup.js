import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Sign Up</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

export default Signup;
