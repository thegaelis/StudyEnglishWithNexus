import { StyleSheet, Text, View, ImageBackground} from 'react-native'
import React, {useEffect} from 'react'
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
              <Text onPress={() => navigation.navigate('Login')} style={styles.b}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Text onPress={() => navigation.navigate('Register')} style={styles.b}>Register</Text>
            </TouchableOpacity>
        
      </View>
      </ImageBackground>
      
    )
  }

const styles = StyleSheet.create({
    container: {
        left:0,
        top:570,
        display:'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        // justifyContent: 'space-evenly'
    },
    text: {
        color:'white',
        margin: 20,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',

    },
    button:{
        margin: 20,
        width: 'auto',
        alignItems:'flex-start',
        marginVertical: 10

    },
    b:{
        borderRadius: 15,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor:'#FFFFFF',
        width:'40%',
        paddingVertical:10,
        textAlign: 'center',
        color: 'black'
    }
})    