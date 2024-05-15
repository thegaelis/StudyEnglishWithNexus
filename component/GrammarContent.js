import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe'

export default function GrammarContent({ navigation }) {
  const route = useRoute();
  const { name, words, questions, grammar } = route.params.data;

  return (
    <View>
      <TouchableOpacity style={styles.topContainer} onPress={() => navigation.navigate('TopicMenu', { data: { name: name, words: words, questions: questions, grammar: grammar } })}>
        <Image source={require('../assets/back.png')} style={styles.backbanner}></Image>
        <Text style={styles.banner}>
          {name}
        </Text>
      </TouchableOpacity>
      <ScrollView >
        <View style={styles.ContentContainer}>
          <Text style={styles.Title}>{grammar.title}</Text>
          <YoutubePlayer
            height={200}
            videoId={grammar.videoId}
          />

          <Text style={styles.Content}>{grammar.content}</Text>
        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 20,
    alignItems: 'center',
  },
  banner: {
    marginLeft: 20,
    marginTop: 50,
    fontSize: 30,
    fontWeight: 'bold',
  },
  backbanner: {
    marginLeft: 20,
    marginTop: 50,
  },
  container: {
    width: '100%',
    dipslay: 'flex',
    flexDirection: 'column',
  },
  ContentContainer: {
    padding: 10,
    backgroundColor: 'cornflowerblue',
    marginBottom: 100,
  },
  Title: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 10,
    color: 'white',
  },
  Content: {
    marginTop: 10,
    fontSize: 25,
    lineHeight: 35,
    color: 'white'
  }
})
