import { StyleSheet, Text, View,ScrollView,TouchableOpacity, Image} from 'react-native'
import React,{useEffect,useState}  from 'react'
import { useRoute } from '@react-navigation/native';
import {app} from './Firebasecg.js';
import { getDatabase, ref, onValue} from "firebase/database";
import { useSelector } from 'react-redux';
import Lesson from './Lesson.js'
import {words_relation,words_time,words_weather,words_animal,words_food,words_sport,words_education,words_travel} from '../data/Word.js'
import {questions_relation,questions_time,questions_weather,questions_animal,questions_food,questions_sport,questions_education,questions_travel}from '../data/Question.js';
import 
  {grammar_relation,
  grammar_time,
  grammar_weather,
  grammar_animal,
  grammar_food,
  grammar_sport,
  grammar_education,
  grammar_travel} 
  from '../data/Grammar.js'

export default function Topic({ navigation }) {
  const userLevel = useSelector((state) => state.level);

  function click(){
    return navigation.goBack();
  }


  
  return (
    <View>
      <View style={styles.topContainer}>
      <TouchableOpacity style={styles.BannerBack} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/back.png')} style={styles.backbanner}></Image>
          <Text style={styles.banner}>
            Topic
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.user} onPress={() => navigation.navigate('User')}>
          <Text style={styles.score}>
          {userLevel}
          </Text>
          <Image source={require('../assets/user.png')} style={styles.image}></Image>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.container}>
            {/* ÔNg thay ảnh ở trong require nha */}
            {userLevel > 0?
             (<Lesson picture={require('../assets/relationship.png')} name={'Relationships'} press={()=>navigation.navigate('TopicMenu',{data:{name:'Relationships',words: words_relation,questions: questions_relation,grammar:grammar_relation}})}/>)
            :
             null
            }

            {userLevel > 1?
             (<Lesson picture={require('../assets/chronometer.png')} name={'Time'} press={()=>navigation.navigate('TopicMenu',{data:{name:'Time',words: words_time,questions: questions_time,grammar:grammar_time}})}/>             )
            :
             null
            }

            {userLevel > 2?
             (<Lesson picture={require('../assets/weather-forecast.png')} name={'Weather'} press={()=>navigation.navigate('TopicMenu',{data:{name:'Weather',words: words_weather,questions: questions_weather,grammar:grammar_weather}})}/>)
            :
             null
            }

            {userLevel >3 ?
             (<Lesson picture={require('../assets/hydroponic.png')} name={'Animals and Plants'} press={()=>navigation.navigate('TopicMenu',{data:{name:'Animals and Plants',words: words_animal,questions: questions_animal,grammar_animal}})}/>)
            :
             null
            }
            
            {userLevel >4 ?
            ( <Lesson picture={require('../assets/drink.png')} name={'Food and Drinks'} press={()=>navigation.navigate('TopicMenu',{data:{name:'Food and Drinks',words: words_food,questions: questions_food, grammar:grammar_food}})}/>)
            :
             null
            }

            {userLevel >5 ?
             (<Lesson picture={require('../assets/sports.png')} name={'Sports and Entertainment'} press={()=>navigation.navigate('TopicMenu',{data:{name:'Sports and Entertainment',words: words_sport,questions: questions_sport, grammar:grammar_sport}})}/>)
            :
             null
            }
            {userLevel >6 ?
             (<Lesson picture={require('../assets/book.png')} name={'Education and Work'} press={()=>navigation.navigate('TopicMenu',{data:{name:'Education and Work',words: words_education,questions: questions_education, grammar:grammar_education}})}/>)
            :
             null
            }
            {userLevel > 7?
             ( <Lesson picture={require('../assets/travel.png')} name={'Travel and Culture'} press={()=>navigation.navigate('TopicMenu',{data:{name:'Travel and Culture',words: words_travel,questions: questions_travel, grammar_travel}})}/>)
            :
             null
            }
           

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
    button:{
      width: 'auto',
      alignItems: 'center',
      marginVertical: 10

    },
    b:{
      fontSize: 20,
      fontWeight: 'bold',
      width: '15%',
      backgroundColor:'#4D33B9',
      width:'40%',
      paddingVertical:10,
      textAlign: 'center',
      color: 'white'
    },
    topContainer:{
      display: 'flex',
      flexDirection: 'row',
      paddingBottom:20,
      alignItems:'center',
    },
    banner:{
      alignSelf:'flex-start',
      marginLeft:20,
      marginTop:50,
      fontSize:30,
      fontWeight:'bold',

    },
    backbanner:{
        marginLeft:10,
        marginTop:50,
    },
    BannerBack:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
    },
    user:{
        dipslay:'flex',
        flexDirection:'row',
        marginLeft:'auto',
        marginRight:20,
    },
    image:{
        marginTop:55,
  
    },
    score:{
        marginTop:50,
        fontSize:30,
        marginLeft:'auto',
        marginRight:10
    },
})