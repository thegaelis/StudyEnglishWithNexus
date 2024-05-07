import { StyleSheet, Text, View,ScrollView,TouchableOpacity, Image} from 'react-native'
import React,{useEffect,useState}  from 'react'
import { useSelector } from 'react-redux';
import {app} from './Firebasecg.js';
import { getDatabase, ref, onValue} from "firebase/database";

export default function Home({ navigation }) {
  const [userData, setUserData] = useState(null);
  const [leaderboard, setLeaderBoard] = useState([]);
  const Email = useSelector((state) => state.email);
  const userLevel = useSelector((state) => state.level);

  function click(){
    return navigation.goBack();
  }

  useEffect(() => {
    console.log(Email);
    console.log(userLevel);
    const db = getDatabase(app);
    const Ref_person = ref(db, 'person/' + Email);
    const Ref_name = ref(db, 'person');
    onValue(Ref_person, (snapshot) => {
        const data = snapshot.val();
        setUserData(data); 
    });
    onValue(Ref_name, (snapshot) => {
      const data = snapshot.val();
      const names = Object.keys(data);
      
      let level = [];
      for (let x of names) {
        const Ref_level = ref(db, 'person/' + x);
        onValue(Ref_level, (snapshot_2) => {
          const data_2 = snapshot_2.val();
          level.push({ name: data_2.username, level: data_2.level }); // Use data_2.username here
        });
      }
      level.sort((a, b) => b.level - a.level);
      setLeaderBoard(level);
    }, [Email]);
  },[Email]);

 
  return (
    <View>
      <View style={styles.topContainer}>
        <Text style={styles.greet}>
          Hello, {userData?.username}
        </Text>
        
        <TouchableOpacity style={styles.user} onPress={() => navigation.navigate('User')}>
          <Text style={styles.level}>
          {userLevel}
          </Text>
          <Image source={require('../assets/user.png')} style={styles.image}></Image>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.container}>
            <View style={styles.itemsLeaderboard}>
              <Text style={styles.name}>Leaderboard</Text>
                  <Image style={styles.picture} source={require('../assets/champion.png')} />
                  <Text style={styles.content}>Top 3 of the app</Text>
                  <View style={styles.leaderboardContainerFirst}>
                    <Text style={styles.leaderboardplace}>#1</Text>
                    <Text style={styles.leaderboardname}>{leaderboard?.[0]?.['name']}</Text>
                    <Text style={styles.leaderboardlevel}>{leaderboard?.[0]?.['level']}</Text>
                    <Text></Text>
                  </View>
                  <View style={styles.leaderboardContainerSecond}>
                    <Text style={styles.leaderboardplace}>#2</Text>
                    <Text style={styles.leaderboardname}>{leaderboard?.[1]?.['name']}</Text>
                    <Text style={styles.leaderboardlevel}>{leaderboard?.[1]?.['level']}</Text>
                  </View>
                  <View style={styles.leaderboardContainerThird}>
                    <Text style={styles.leaderboardplace}>#3</Text>
                    <Text style={styles.leaderboardname}>{leaderboard?.[2]?.['name']}</Text>
                    <Text style={styles.leaderboardlevel}>{leaderboard?.[2]?.['level']}</Text>
                  </View>
            </View>
            <View style={styles.itemsTopic}>
              <Text style={styles.name}>Topic</Text>
              <Image style={styles.picture} source={require('../assets/topics.png')} />
              <Text style={styles.content}>Current Topic: {userLevel}</Text>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Topic')}>
                <Text style={styles.b}>View all topic</Text>
              </TouchableOpacity>
            </View>

        </View>
      </ScrollView>
      </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'auto',
        marginLeft:10,
        marginBottom:200,
        flex: 1,
        // justifyContent: 'space-evenly',
        flexDirection:'column',
        flexWrap:'wrap',
    },
    itemsLeaderboard:{
      dipslay: 'flex',
      flexDirection: 'column',
      height:'auto',
      width: '85%',
      flexBasis:'40%',     
      marginTop:40,
      marginHorizontal:20,
      borderRadius:15,
      backgroundColor: "lightskyblue",
      padding:10,
    },
    name:{
      fontSize:30,
      fontWeight:'bold',
      margin:10,
      color:'white',
    },
    picture:{
      alignSelf:'center',
      width:100,
      height:100,
      margin:10,
    },
    content:{
      margin:10,
      fontSize:20,
      fontWeight:'bold',
      margin:10,
      color:'white',
    },
    leaderboardContainerFirst:{
      display:'flex',
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
    itemsTopic:{
      dipslay: 'flex',
      flexDirection: 'column',
      height:'auto',
      width: '85%',
      flexBasis:'40%',     
      marginTop:40,
      marginHorizontal:20,
      borderRadius:15,
      backgroundColor: "#43bc43",
      padding:10,
    },
    button:{
      width: 'auto',

    },
    b:{
      margin:10,
      fontSize: 15,
      fontWeight: 'bold',
      width: '15%',
      backgroundColor:'white',
      width:'40%',
      paddingVertical:10,
      textAlign: 'center',
      color: 'black',
      borderRadius:15
    },
    topContainer:{
      borderRadius:10,
      display: 'flex',
      flexDirection: 'row',
      paddingBottom:20,
      alignItems:'center',
    },
    greet:{
      alignSelf:'flex-start',
      marginLeft:20,
      marginTop:50,
      fontSize:30,
      fontWeight:'bold',

    },
    user:{
      display:'flex',
      flexDirection:'row',
      marginLeft:'auto',
      marginRight:20,
      
    },
    image:{
      marginTop:55,

    },
    level:{
      marginTop:50,
      fontSize:30,
      marginLeft:'auto',
      marginRight:10
    },
})