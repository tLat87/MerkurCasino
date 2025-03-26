import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';

const InfoScreen = ({navigation}) => {

  return (
  <ScrollView style={{backgroundColor: '#032950', paddingTop: 24, paddingHorizontal: 16}}>

    <View style={{backgroundColor:'#053362', padding:16, borderRadius: 16, flexDirection: 'row', marginBottom: 8}}>
      <Image source={require('../assets/img/Frame1.png')} style={{width:120, height: 120, borderRadius: 16, marginRight: 8}} resizeMode="cover"/>
      <View style={{flexDirection:'column', justifyContent:'center'}}>
        <Text style={{fontSize: 20,fontWeight: 'bold',  color: '#fff', width: '50%', marginBottom: 12}}>
          New Discoveries in Astronomy
        </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('SetailedInfo')}} style={{backgroundColor: '#F9CF22', padding: 8, alignSelf: 'flex-start',width: 200, alignItems: 'center', borderRadius: 99}}>
          <Text style={{fontSize: 14,  color: '#000'}}>
            Read more
          </Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={{backgroundColor:'#053362', padding:16, borderRadius: 16, flexDirection: 'row', marginBottom: 8}}>
      <Image source={require('../assets/img/Frame2.png')} style={{width:120, height: 120, borderRadius: 16, marginRight: 8}} resizeMode="cover"/>
      <View style={{flexDirection:'column', justifyContent:'center'}}>
        <Text style={{fontSize: 20,fontWeight: 'bold',  color: '#fff', width: '50%', marginBottom: 12}}>
          Mysteries of Distant Galaxies
        </Text>
        <TouchableOpacity style={{backgroundColor: '#F9CF22', padding: 8, alignSelf: 'flex-start',width: 200, alignItems: 'center', borderRadius: 99}}>
          <Text style={{fontSize: 14,  color: '#000'}}>
            Read more
          </Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={{backgroundColor:'#053362', padding:16, borderRadius: 16, flexDirection: 'row', marginBottom: 8}}>
      <Image source={require('../assets/img/Frame3.png')} style={{width:120, height: 120, borderRadius: 16, marginRight: 8}} resizeMode="cover"/>
      <View style={{flexDirection:'column', justifyContent:'center'}}>
        <Text style={{fontSize: 20,fontWeight: 'bold',  color: '#fff', width: '50%', marginBottom: 12}}>
          The Future of Space Travel
        </Text>
        <TouchableOpacity style={{backgroundColor: '#F9CF22', padding: 8, alignSelf: 'flex-start', width: 200, alignItems: 'center', borderRadius: 99}}>
          <Text style={{fontSize: 14,  color: '#000'}}>
            Read more
          </Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={{backgroundColor:'#053362', padding:16, borderRadius: 16, flexDirection: 'row', marginBottom: 8}}>
      <Image source={require('../assets/img/Frame4.png')} style={{width:120, height: 120, borderRadius: 16, marginRight: 8}} resizeMode="cover"/>
      <View style={{flexDirection:'column', justifyContent:'center'}}>
        <Text style={{fontSize: 20,fontWeight: 'bold',  color: '#fff', width: '50%', marginBottom: 12}}>
          What Do We Know About Black Holes?
        </Text>
        <TouchableOpacity style={{backgroundColor: '#F9CF22', padding: 8, alignSelf: 'flex-start',width: 200, alignItems: 'center', borderRadius: 99}}>
          <Text style={{fontSize: 14,  color: '#000'}}>
            Read more
          </Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={{backgroundColor:'#053362', padding:16, borderRadius: 16, flexDirection: 'row', marginBottom: 8}}>
      <Image source={require('../assets/img/Frame5.png')} style={{width:120, height: 120, borderRadius: 16, marginRight: 8}} resizeMode="cover"/>
      <View style={{flexDirection:'column', justifyContent:'center'}}>
        <Text style={{fontSize: 20,fontWeight: 'bold',  color: '#fff', width: '50%', marginBottom: 12}}>
          Life on Mars: Myth or Reality?
        </Text>
        <TouchableOpacity style={{backgroundColor: '#F9CF22', padding: 8, alignSelf: 'flex-start',width: 200, alignItems: 'center', borderRadius: 99}}>
          <Text style={{fontSize: 14,  color: '#000'}}>
            Read more
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
)};

export default InfoScreen;
