import React from 'react';
import { StyleSheet, Text, View,Image,KeyboardAvoidingView } from 'react-native';
import LoginForm from './loginForm.js';
export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo}
            source={require('AwesomeProject/src/github.png')} />
            <Text style={styles.title}> Aplikasi React Native</Text>
        </View>

        <View style={styles.formContainer}>
             <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3700B3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoContainer:{
    alignItems: 'center',
    flexGrow:1,
    justifyContent: 'center'

  },
  logo:{
      width: 100,
      height: 100
  },
  title:{
    color: '#FFFFFF',
    marginTop:10,
    width:140,
  }
});
