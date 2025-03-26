import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';

const SetailedInfoScreen = () => (
  <ScrollView style={{backgroundColor: '#032950', paddingTop: 24, paddingHorizontal: 16}}>
    <Image source={require('../assets/img/Frame1.png')} style={{width:'100%', height: 280, backgroundColor: '#000', borderRadius: 20}} resizeMode="cover"/>

    <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold',marginVertical: 18}}>
      New Discoveries in Astronomy
    </Text>

    <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
      Modern astronomy is evolving rapidly, with scientists making groundbreaking discoveries that expand our understanding of the universe.
    </Text>

    <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
      🔭 Exoplanets in the Habitable Zone  In 2024, the James Webb Space Telescope detected an atmosphere on exoplanet K2-18b, containing methane and carbon dioxide. This raises the possibility of liquid water and, potentially, life.
    </Text>

    <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
      💥 Gravitational Waves from Black Hole Mergers  Astronomers have successfully recorded gravitational waves from black hole mergers, confirming Einstein’s general relativity theory and providing new insights into the nature of spacetime.
    </Text>

    <Text style={{color: '#fff', fontSize: 14, marginBottom: 8}}>
      🚀 Fast Radio Bursts (FRBs) from Deep Space  Newly detected repeating fast radio bursts (FRBs) suggest unknown cosmic phenomena. Some researchers speculate they may be caused by magnetars or even signals from extraterrestrial civilizations.
    </Text>
    <View style={{marginBottom: 50}}/>
  </ScrollView>
);

export default SetailedInfoScreen;
