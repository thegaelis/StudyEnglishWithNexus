import { StyleSheet, Text, View, Image, TouchableNativeFeedback, TouchableHighlight } from 'react-native'
import React from 'react'
import { useState } from 'react';
import * as Speech from 'expo-speech'

export default function Word(props) {
  const [StyleEng, setStyleEng] = useState(styles.ENGLISH_ON);
  const [StyleViet, setStyleViet] = useState(styles.ENGLISH_OFF);

  const press = () => {
    if (StyleEng === styles.ENGLISH_ON) {
      setStyleEng(styles.ENGLISH_OFF);
      setStyleViet(styles.VIETSUB_ON);
    }
    else {
      setStyleEng(styles.ENGLISH_ON);
      setStyleViet(styles.VIETSUB_OFF);
    }
  }

  const TextToSpeech = (text, language) => {
    Speech.speak(text, { language });
  }

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={press}>
        <View style={StyleEng}>
          <TouchableHighlight style={styles.speakerBtn} underlayColor={'transparent'} activeOpacity={0.5}
            onPress={() => {TextToSpeech(props.english, 'en-US')}}>
            <Image style={styles.speakerImg} source={require('../assets/SpeakerIcon.png')} />
          </TouchableHighlight>
          <Image style={styles.picture} source={props.picture} />
          <Text onPress={press} style={styles.english}>{props.english}</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={press}>
        <View style={StyleViet}>
          <TouchableHighlight style={styles.speakerBtn} underlayColor={'transparent'} activeOpacity={0.5}
            onPress={() => {TextToSpeech(props.vietsub, 'vi-VN')}}>
            <Image style={styles.speakerImg} source={require('../assets/SpeakerIcon.png')} />
          </TouchableHighlight>
          <Image style={styles.picture} source={props.picture} />
          <Text onPress={press} style={styles.vietsub}>{props.vietsub}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  ENGLISH_ON: {
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingTop: 10,
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 15,
  },
  VIETSUB_ON: {
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 1,
    height: 150,
    fontSize: 40,
    fontWeight: 'bold',
    borderRadius: 15,
  },
  ENGLISH_OFF: {
    display: 'none',
  },
  VIETSUB_OFF: {
    display: 'none',
  },
  vietsub: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    width: '90%',
    marginHorizontal: 20,
    marginTop: 30,
  },
  picture: {
    marginRight: 'auto',
    width: '50%',
    height: 100,
    borderColor: 'red',
  },
  english: {
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 5,
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  speakerBtn: {
    position: 'absolute',
    top: 0,
    right: 20
  },
  speakerImg: {
    width: 30,
    height: 30
  }
})