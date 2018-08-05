import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
           placeholder="username or email"
           style={styles.input} />
        <TextInput
          secureTextEntry
          placeholder="password"
          style={styles.input} />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.textContainer}>LOGIN</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
  padding:20,
  },
  input:{
    height:60,
    width: 300,
    backgroundColor:'#5300e8',
    marginBottom:20,
    paddingHorizontal:10,
  },
  buttonContainer:{
    backgroundColor:'#03A9F4',
    paddingVertical:10,
  },
  textContainer:{
    textAlign:'center',
    color:'#FFFFFF',
    fontWeight:'700',
  }
});
