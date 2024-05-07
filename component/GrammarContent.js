import { StyleSheet, Text, View,TouchableOpacity, Image, ScrollView} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

export default function GrammarContent({navigation}) {
    const route = useRoute();
    const {name, words, questions, grammar} = route.params.data;
    
    return (
        <View>
          <TouchableOpacity style={styles.topContainer} onPress={() => navigation.navigate('TopicMenu',{data:{name:name,words: words,questions: questions, grammar:grammar}})}>
            <Image source={require('../assets/back.png')} style={styles.backbanner}></Image>
            <Text style={styles.banner}>
              {name}
            </Text>
          </TouchableOpacity>
          <ScrollView >
            <View style={styles.ContentContainer}>
              <Text style={styles.Title}>{grammar.title}</Text>
              <Text style={styles.Content}>{grammar.content}</Text>
            </View>
            
          </ScrollView>
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
    },
    container: {
      width:'100%',
      dipslay:'flex',
      flexDirection:'column',

    },
    ContentContainer:{
      height:'100%',
      display:'flex',
      flexDirection:'column',
      padding:10,
      backgroundColor:'cornflowerblue',
      borderRadius:15,
      paddingBottom:50,
      marginBottom:100,
    },
    Title:{
      fontSize:30,
      fontWeight:'bold',
      alignSelf:'center',
      margin:10,
      color:'white',
    },
    Content:{
      fontSize:25,
      lineHeight:35,
      color:'white'
    },

  })