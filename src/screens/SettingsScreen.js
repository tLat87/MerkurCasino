import React from 'react';
import { View, Text, ScrollView, Switch, TouchableOpacity } from 'react-native';
import NotificSvg from '../assets/svg/NotificSvg';
import VolSvg from '../assets/svg/VolSvg';
import MusSvg from '../assets/svg/MusSvg';
import TouchSvg from '../assets/svg/TouchSvg';
import PPSvg from '../assets/svg/PPSvg';
import SmallChevronSvg from '../assets/svg/SmallChevronSvg';

const SettingsScreen = ({ navigation }) => {
  const [remindEvents, setRemindEvents] = React.useState(true);
  const [soundEffects, setSoundEffects] = React.useState(true);
  const [music, setMusic] = React.useState(true);

  return (
    <View style={{ backgroundColor: '#032950', flex: 1, paddingTop: 24 }}>


      <ScrollView style={{ paddingHorizontal: 16 }}>
        <SettingItem title="Remind about new events" value={remindEvents} onValueChange={setRemindEvents} />
        <SettingItem title="Sound effects" value={soundEffects} onValueChange={setSoundEffects} />
        <SettingItem title="Music" value={music} onValueChange={setMusic} />
        <TouchableItem title="About the Developers" />
        <TouchableItem title="Terms of Use" />
        <TouchableItem title="Privacy Policy" />
      </ScrollView>
    </View>
  );
};

const SettingItem = ({ title, value, onValueChange }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomColor: '#ffffff30', borderBottomWidth: 1 }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {title === 'Remind about new events' && <NotificSvg/>}
      {title === 'Sound effects' && <VolSvg/>}
      {title === 'Music' && <MusSvg/>}
      <Text style={{ color: 'white', fontSize: 16 }}>{title}</Text>
    </View>
    <Switch value={value} onValueChange={onValueChange} thumbColor="#FFD700" trackColor={{ false: '#000', true: '#fff' }} />
  </View>
);

const TouchableItem = ({ title }) => (
  <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomColor: '#ffffff30', borderBottomWidth: 1 }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {title === 'About the Developers' && <TouchSvg/>}
      {title === 'Terms of Use' && <TouchSvg/>}
      {title === 'Privacy Policy' && <PPSvg/>}
      <Text style={{ color: 'white', fontSize: 16 }}>{title}</Text>
    </View>
    <SmallChevronSvg/>
  </TouchableOpacity>
);

export default SettingsScreen;
