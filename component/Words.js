import { StyleSheet, Text, View,TouchableOpacity,FlatList, Image} from 'react-native'
import React from 'react'
import Word from './Word'
import { useRoute } from '@react-navigation/native';



export default function Words({navigation}) {
  const route = useRoute();
  const {name, words, questions, grammar} = route.params.data;
  const Render=({item})=>{
    return(
      <Word picture={item.picture} english={item.english} vietsub={item.vietsub} />
    );
  }
  return (
      <View>
        <TouchableOpacity style={styles.topContainer} onPress={() => navigation.navigate('TopicMenu',{data:{name:name,words: words,questions: questions, grammar:grammar}})}>
          <Image source={require('../assets/back.png')} style={styles.backbanner}></Image>
          <Text style={styles.banner}>
            {name}
          </Text>
        </TouchableOpacity>
        
        <FlatList 
            // numColumns={3}
            data={words}
            renderItem={Render}
            keyExtractor={(item)=>item.english.toString()}
            scrollEnabled={true}
            height={'80%'}
          />
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
  container: {
    width:'100%',
    dipslay:'flex',
    flexDirection:'column',
  },
  button:{
    marginTop:5,
    width: '100%',
    alignItems:'center',
  },
  b:{
    borderRadius:15,
    fontSize: 20,
    fontWeight: 'bold',
    width: '15%',
    backgroundColor:'#43bc43',
    width:'40%',
    paddingVertical:10,
    textAlign: 'center',
    color: 'white'
  },
   
})