import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import React,{useState,useEffect} from 'react';
import { useRoute } from '@react-navigation/native';
import {app} from './Firebasecg.js';
import { getDatabase, ref, onValue} from "firebase/database";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './store/action/auth.js';


export default function User({ navigation }) {
  const [userData, setUserData] = useState(null);
  const route = useRoute();
  const Email = useSelector((state) => state.email);
  const userLevel = useSelector((state) => state.level);
  const dispatch = useDispatch();

  useEffect(() => {
    const db = getDatabase(app);
    const starCountRef = ref(db, 'person/' + Email);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setUserData(data);
    });
  }, [Email]);

  return (
    <View>
        <TouchableOpacity style={styles.topContainer} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/back.png')} style={styles.backbanner}></Image>
          <Text style={styles.banner}>
            Account
          </Text>
        </TouchableOpacity>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/user.png')}></Image>
        <Text style={styles.name}>{userData?.username}</Text>
        <Text style={styles.username}>Email: {Email}</Text>
        <Text style={styles.userscore}>My Level: {userLevel} </Text> 
        <Text style={styles.userdateJoined}>Date Joined: {userData?.day}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Option')} >
        <Text style={styles.option}>Edit Your Account</Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text style={styles.option}>About the App</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        dispatch(logout);
        navigation.navigate('Welcome');
      }}>
        <Text style={styles.option}>Log out</Text>
      </TouchableOpacity>
    </View>
    
  )
}

    
const styles = StyleSheet.create({
  topContainer:{
    display: 'flex',
    flexDirection: 'row',
    paddingBottom:20,
    alignItems:'center',
  },
  banner:{
    marginLeft:20,
    marginTop:50,
    fontSize:30,
    fontWeight:'bold',

  },
  backbanner:{
    // verticalAlign:'middle',
    marginLeft:20,
    marginTop:50,
  }
  ,
  container:{
    display:'flex',
    marginTop:20,
    marginBottom:20,
    alignItems:'center',
  },
  image:{
    width:100,
    height:100,
    alignSelf:'center',
    borderRadius:50,
    // alignContent:'flex-end',
  },
  name:{
    fontWeight:'bold',
    fontSize:25,
    margin:10,
  },
  username:{
    fontWeight:'bold',
    fontSize:20,
    margin:10,
  },
  userscore:{
    fontWeight:'bold',
    fontSize:20,
    margin:10,
  },
  userdateJoined:{
    fontWeight:'bold',
    fontSize:20,
    margin:10,
  },
  option:{
    fontSize: 20,
    margin:20,
  },


})