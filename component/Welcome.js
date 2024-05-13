import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
export default function Welcome({ navigation }) {
  const isAuth = useSelector((state) => state.isAuthenticated);
  useEffect(() => { // Use useEffect to handle navigation
    if (isAuth) {
      navigation.navigate('Home');
    }
  }, [isAuth, navigation]);
  return (
    <ImageBackground source={require('../assets/background.png')}>
      <View style={styles.container}>
        <Text style={styles.text} >
          {'Study English Vocabulary \nwith Nexus'}
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text onPress={() => navigation.navigate('Login')} style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text onPress={() => navigation.navigate('Register')} style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20
  },
  text: {
    color: 'white',
    marginBottom: 30,
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  button:{
    width: 130
  },
  buttonText: {
    borderRadius: 15,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    textAlign: 'center',
    color: 'black',
    marginBottom: 20
  }
})

