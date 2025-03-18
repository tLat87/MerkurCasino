import React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';

const WelcomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: '#032950', alignItems: 'center', padding: 16, paddingTop: '40%'}}>

    <Image source={require('../assets/img/GALAXY.png')} style={{width:'100%', position: 'absolute', top: '30%'}} resizeMode="contain"/>
    <Image source={require('../assets/img/METEOR.png')} style={{position: 'absolute', bottom: '10%', right: 0}} resizeMode="contain"/>


    <Image source={require('../assets/img/4.png')} style={{width:'80%'}} resizeMode="contain"/>
    <View style={{backgroundColor:"#053362", padding: 16, borderRadius: 24, marginTop: -220}}>
      <Text style={{color:'white', fontSize: 24, fontWeight: 'bold', marginBottom: 8}}>
        Hello, wanderer! Welcome to the space world. Let's begin our adventure!
      </Text>
      <TouchableOpacity onPress={() => navigation.replace('Main')} style={{backgroundColor: '#F9CF22', padding: 16, width: 220,alignSelf: 'center', alignItems: 'center', borderRadius: 99}}>
        <Text style={{fontSize: 20,  color: '#000', fontWeight: 'bold'}}>
          Start
        </Text>
      </TouchableOpacity>
    </View>

  </View>
);

export default WelcomeScreen;
