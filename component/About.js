import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';


export default function About({ navigation }) {
  return (
    <View >
      <TouchableOpacity style={styles.topContainer} onPress={() => navigation.navigate('User')}>
          <Image source={require('../assets/back.png')} style={styles.backbanner}></Image>
          <Text style={styles.banner}>
            About The App
          </Text>
        </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.appname}>{'Study English Vocabulary with Nexus'}</Text>
        <Text style={styles.appinfo}>V.0.1.0</Text>
        <Text style={styles.appinfo}>Date created: Wed, April 24, 2024</Text> 
        <Text style={styles.appinfo}>Team members:</Text>
        <Text style={styles.name}>Huỳnh Quốc Thái - 47.01.104.188 - Team Leader</Text>
        <Text style={styles.name}>Lê Minh Quang - 47.01.104.171 - Team Member</Text>
        <Text style={styles.name}>Nguyễn Đông Phương - 47.01.104.166 - Team Member</Text>
        <Text style={styles.name}>Nguyễn Hữu Anh Tuấn - 47.01.104.228 - Team Member</Text>


      </View>
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
  appname:{
    fontWeight:'bold',
    fontSize:30,
    margin:10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    color:'green'
  },
  appinfo:{
    fontWeight:'bold',
    fontSize:20,
    margin:10,
  },
  name:{
    alignSelf: 'flex-start',
    fontSize:20,
    margin:15,
  },
  option:{
    fontSize: 20,
    margin:20,
  },


})