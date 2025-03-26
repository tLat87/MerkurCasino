import React from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';

const LoseScreen = ({navigation, route}) => {
  const {score} = route.params;
  return (
  <ImageBackground
    source={require('../assets/img/Layer1222.png')}
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -20 }}
  >
    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24,position: 'absolute', top: 80, left: 20 }}>Game over</Text>

    <Text style={{fontSize: 20, color: '#fff'}}>
      You get
    </Text>

    <View style={{backgroundColor: 'gray', padding:12, borderRadius: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20}}>
      <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
        {score}
      </Text>
      <Image
        source={require('../assets/img/coin.png')}
        style={{ height: 40 }}
        resizeMode="contain"
      />
    </View>

    <TouchableOpacity onPress={() => navigation.pop(2)} style={{backgroundColor: '#F9CF22', padding: 16, width: 220,alignSelf: 'center', alignItems: 'center', borderRadius: 99, zIndex: 99}}>
      <Text style={{fontSize: 20,  color: '#000', fontWeight: 'bold'}}>
        Back
      </Text>
    </TouchableOpacity>

    <Image source={require('../assets/img/_0003.png')} style={{width:'80%', position: 'absolute', bottom:20}} resizeMode="contain"/>

  </ImageBackground>
)};

export default LoseScreen;
