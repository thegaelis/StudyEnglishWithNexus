import { StyleSheet, Text, View ,Image, TouchableOpacity,TouchableWithoutFeedback} from 'react-native'
import React,{useEffect,useState} from 'react';
import { getAuth} from "firebase/auth";
import { useSelector } from 'react-redux';
import {app} from './Firebasecg.js';
import { getDatabase,ref,onValue} from "firebase/database";

export default function Lesson(props) {
        const [score, setScore] = useState(0);
        const [leaderboard, setLeaderBoard] = useState([]);
        const Email = useSelector((state) => state.email);
        useEffect(() => {
          const db = getDatabase(app);
          const Ref_lesson = ref(db, 'score/' + Email+'/'+props.name.split(' ')[0]);
          const Ref_name = ref(db, 'score');
          
          onValue(Ref_lesson, (snapshot) => {
              const data = snapshot.val();
              setScore(data);
          });

          onValue(Ref_name, (snapshot) => {
            const data = snapshot.val();
            const names = Object.keys(data);
            
            let score_array = [];
            for (let x of names) {
              const Ref_score = ref(db, 'score/' + x + '/' + props.name.split(' ')[0]);
              onValue(Ref_score, (snapshot_2) => {
                const data_2 = snapshot_2.val();
                const usernameRef = ref(db, 'person/' + x);
                onValue(usernameRef, (snapshot_username) => {
                  const data_username = snapshot_username.val();
                  score_array.push({ name: data_username.username, score: data_2 });
                });
              });
            }
            score_array.sort((a, b) => b.score - a.score);
            setLeaderBoard(score_array);
          }, [Email]);
        }, [Email]);
        
        return (
            // <View style = {styles.container}>
            //   <Image style={styles.picture} source={props.picture} />
            //   <Text style={styles.name} onPress={props.press}>{props.name}</Text>
            // </View> 
            // If not completed, then block the user from touching
            <TouchableWithoutFeedback>
              <View style = {styles.container}>
                <Text style={styles.name} onPress={props.press}>{props.name}</Text>
                <Image style={styles.picture} source={props.picture} />
                <Text style={styles.status}>{parseInt(score)<8 ?("Not completed"):("Completed")}</Text>
                <Text style={styles.score}>{score}/10 at this lesson</Text>
                <TouchableOpacity style={styles.button}>
                  <Text onPress={props.press} style={styles.b}>View Lesson</Text>
                </TouchableOpacity>
                <Text style={styles.content}>Top 3 of the topic</Text>
                <View style={styles.leaderboardContainerFirst}>
                    <Text style={styles.leaderboardplace}>#1</Text>
                    <Text style={styles.leaderboardname}>{leaderboard?.[0]?.['name']}</Text>
                    <Text style={styles.leaderboardlevel}>{leaderboard?.[0]?.['score']}</Text>
                    <Text></Text>
                  </View>
                  <View style={styles.leaderboardContainerSecond}>
                    <Text style={styles.leaderboardplace}>#2</Text>
                    <Text style={styles.leaderboardname}>{leaderboard?.[1]?.['name']}</Text>
                    <Text style={styles.leaderboardlevel}>{leaderboard?.[1]?.['score']}</Text>
                  </View>
                  <View style={styles.leaderboardContainerThird}>
                    <Text style={styles.leaderboardplace}>#3</Text>
                    <Text style={styles.leaderboardname}>{leaderboard?.[2]?.['name']}</Text>
                    <Text style={styles.leaderboardlevel}>{leaderboard?.[2]?.['score']}</Text>
                  </View>
              </View>
          </TouchableWithoutFeedback>
        );
    
}

const styles = StyleSheet.create({
    container:{
      dipslay: 'flex',
      flexDirection: 'column',
      height:'auto',
      width: '85%',
      flexBasis:'40%',     
      marginTop:40,
      marginHorizontal:20,
      borderRadius:15,
      backgroundColor: "#FFFFFF",
      padding:10,
    },
    name:{
      fontSize:30,
      fontWeight:'bold',
      margin:10,
      color:'red',
    },
    picture:{
      alignSelf:'center',
      width:100,
      height:100,
    },
    status:{
      margin:10,
      fontSize:20,
      fontWeight:'bold',
      margin:10,
      color:'#000000',
    },
    score:{
      margin:10,
      fontSize:20,
      margin:10,
      color:'#000000',
    },
    button:{
      width: 'auto',

    },
    b:{
      margin:10,
      fontSize: 15,
      fontWeight: 'bold',
      width: '15%',
      backgroundColor:'#43bc43',
      width:'40%',
      paddingVertical:10,
      textAlign: 'center',
      color: 'white',
      borderRadius:15
    },
    content:{
      margin:10,
      fontSize:20,
      fontWeight:'bold',
      margin:10,
      color:'black',
    },
    leaderboardContainerFirst:{
      dipslay:'flex',
      flexDirection:'row',
      width:'auto',
      margin:10,
      padding:5,
      borderRadius:15,
      backgroundColor:'gold',
    },
    leaderboardContainerSecond:{
      dipslay:'flex',
      flexDirection:'row',
      width:'auto',
      margin:10,
      padding:5,
      borderRadius:15,
      backgroundColor:'silver',
    },
    leaderboardContainerThird:{
      dipslay:'flex',
      flexDirection:'row',
      width:'auto',
      margin:10,
      padding:5,
      borderRadius:15,
      backgroundColor:'peru',
    },
    leaderboardlevel:{
      marginLeft:'auto',
      fontSize:20,
      fontWeight:'bold',
      margin:5,
      color:'#FFFFFF',
    },
    leaderboardname:{
      fontSize:20,
      fontWeight:'bold',
      margin:5,
      color:'#FFFFFF',
    },
    leaderboardplace:{
      fontSize:20,
      fontWeight:'bold',
      margin:5,
      color:'#FFFFFF',
    },

})