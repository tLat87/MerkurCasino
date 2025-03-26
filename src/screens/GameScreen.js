import React from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';

const GameScreen = ({navigation}) => (
  <ImageBackground
    source={require('../assets/img/Group20461.png')}
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -20 }}
  >
    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24,position: 'absolute', top: 80, left: 20 }}>Game</Text>

    <Image source={require('../assets/img/_0019.png')} style={{width:'80%'}} resizeMode="contain"/>
    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24, width: 300,marginTop: -50, textAlign: 'center' }}>Let's go on a space flight and overcome all obstacles!</Text>

    <TouchableOpacity onPress={()=>{navigation.navigate('GameProcces')}}>
      <Image source={require('../assets/img/mdi_play.png')} style={{marginTop: 40}} resizeMode="contain"/>
    </TouchableOpacity>
  </ImageBackground>
);

export default GameScreen;
