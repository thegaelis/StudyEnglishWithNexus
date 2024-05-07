import { StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';



export default function TopicMenu({navigation}) {
  const route = useRoute();
  const {name, words, questions, grammar} = route.params.data;

  return (
      <View>
        <TouchableOpacity style={styles.topContainer} onPress={() => navigation.navigate('Topic')}>
          <Image source={require('../assets/back.png')} style={styles.backbanner}></Image>
          <Text style={styles.banner}>
            {name}
          </Text>
        </TouchableOpacity>
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('Words',{data:{name:name,words: words,questions: questions, grammar: grammar}})}>
                <Text style={styles.optionTitle}>Vocabulary</Text>
                <Image style={styles.optionPicture} source={require('../assets/vocabulary.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('GrammarContent',{data:{name:name,words: words,questions: questions, grammar: grammar}})}>
                <Text style={styles.optionTitle}>Grammar</Text>
                <Image style={styles.optionPicture} source={require('../assets/grammar.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Test',{data:{name:name,words:words,questions:questions , grammar: grammar}})}>
                <Text style={styles.optionTitle}>Test</Text>
                <Image style={styles.optionPicture} source={require('../assets/exam.png')}></Image>
            </TouchableOpacity>
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
  //  verticalAlign:'middle',
    marginLeft:20,
    marginTop:50,
  },
  menuContainer: {
    width:'100%',
    height:'auto',
    marginLeft:10,
    marginBottom:200,
    dipslay:'flex',
    // justifyContent: 'space-evenly',
    flexDirection:'column',
    flexWrap:'wrap',
  },
  option:{
    dipslay: 'flex',
    flexDirection: 'row',
    height:'auto',
    width: '85%',
    marginTop:40,
    marginHorizontal:20,
    borderRadius:15,
    backgroundColor: "#FFFFFF",
    padding:10,
  },
  optionTitle:{
    fontSize:30,
    margin:10,
    color:'black',
  },
  optionPicture:{
    marginLeft:'auto',
    width:64,
    height:64,
  },
  
})