import { StyleSheet, Text, View,TextInput,ImageBackground,Alert} from 'react-native'
import React,{ useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

//FIREBASE
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from './Firebasecg.js';
import { getDatabase, ref, set } from "firebase/database";
import { useDispatch } from 'react-redux';
import { registerFailed, registerSuccess } from './store/action/auth.js';


export default function Register({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [rePass, setrePass] = useState('');

    const register=()=>{
        
        if(username.trim()==''||email.trim()==''||pass.trim()==''||rePass.trim()=='') {
            Alert.alert(
                'Alert',
                'Please fill all the required field',
                [    { text: 'OK' }  ]
            );
        }
        else {
            if(pass!==rePass||pass.length<6) {
                Alert.alert(
                    'Alert',
                    'Password Error',
                    [    { text: 'OK' }  ]
                );
            }
            else{
                const auth = getAuth(app);
                createUserWithEmailAndPassword(auth, email, pass)
                .then(() => {
                    Alert.alert(
                        'Alert',
                        'Registered Successfully',
                        [    { text: 'OK' }  ]
                    );
                    add(username,email,pass);
                    setUsername('');
                    setEmail('');
                    setPass('');
                    setrePass('');
                    useDispatch(registerSuccess(email));
                    navigation.navigate('Welcome');
                })
                .catch(() => {
                    useDispatch(registerFailed);
                    Alert.alert(
                        'Alert',
                        'This email is linked with an account',
                        [    { text: 'OK' }  ]
                    );
                    
                });
            }
        }
    };
    
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const add=(username,email,pass)=>{
        const db = getDatabase(app);
        const Email=email.split('@');
        set(ref(db, 'person/'+Email[0]), {
          username: username,
          email: email,
          password: pass,
          level:1,
          day:day+"/"+month+"/"+year
        });

        set(ref(db, 'score/'+Email[0]), {
            Relationships:0,
            Time:0,
            Weather:0,
            Animals:0,
            Food:0,
            Sports:0,
            Education:0,
            Travel:0
        });
    };

    function handleUserNameChange(text) {
        setUsername(text);
    }

    function handleEmailChange(text) {
        setEmail(text);
    }
  
    function handlePassChange(text) {
        setPass(text);
    }

    function handleRePassChange(text) {
        setrePass(text);
    }

  return (
    <ImageBackground source={require('../assets/background.png')}>
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.banner}>Join us to study English</Text>
        <View style={styles.register}>
            <Text style={styles.text}>Username</Text>
            <TextInput value={username} onChangeText={handleUserNameChange} style={styles.input} type="username" autoCapitalize='none'></TextInput>
        </View>
        <View style={styles.register}>
            <Text style={styles.text}>Email</Text>
            <TextInput value={email} onChangeText={handleEmailChange} style={styles.input} type="name" autoCapitalize='none'></TextInput>
        </View>
        <View style={styles.register}>
            <Text style={styles.text}>Password</Text>
            <TextInput value={pass} onChangeText={handlePassChange} style={styles.input} type="password" autoCapitalize='none' secureTextEntry={true}></TextInput>
        </View>
        <View style={styles.register}>
            <Text style={styles.text}>Re-enter Password</Text>
            <TextInput value={rePass} onChangeText={handleRePassChange} style={styles.input} type="password" autoCapitalize='none' secureTextEntry={true}></TextInput>
        </View>
        <View>
            <TouchableOpacity style={styles.button}>
                <Text onPress={() => register()} style={styles.b}>Register</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        left:0,
        display:'flex',
        top:160,
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      },
    form: {
          display:'flex',
          justifyContent: 'center',
      },
    register: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'flex-start',
        marginVertical: 10
    },
    input: {
        padding:10,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginLeft:20,
        marginRight:20,
        width:'90%',
        backgroundColor:'white',
    },
    text: {
        color:'white',
        marginLeft:20,
        marginBottom:10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    banner: {
        color:'white',
        marginLeft:20,
        fontSize:30,
        fontWeight:'bold',
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,
    button:{
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10
    },
    b:{
        borderRadius:15,
        fontSize: 20,
        fontWeight: 'bold',
        width: '15%',
        backgroundColor:'white',
        width:'40%',
        paddingVertical:10,
        textAlign: 'center',
        color: 'black'
    }
})    