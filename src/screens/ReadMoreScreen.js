import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeObject } from '../redux/slices/objectSlice';

const ReadMoreScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { object, index } = route.params;

  const handleDelete = () => {
    dispatch(removeObject(index));
    navigation.goBack(); // Возвращаемся назад после удаления
  };

  return (
    <ScrollView
      style={{
        backgroundColor: '#032950',
        paddingTop: 24,
        paddingHorizontal: 16,
      }}>
      <Image
        source={{ uri: object.imageUri }}
        style={{
          width: '100%',
          height: 280,
          backgroundColor: '#000',
          borderRadius: 20,
        }}
        resizeMode="cover"
      />

      <Text
        style={{
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
          marginVertical: 18,
        }}>
        {object.title}
      </Text>

      <Text style={{ color: '#fff', fontSize: 14, marginBottom: 8 }}>
        💥 {object.description}
      </Text>

      <Text style={{ color: '#fff', fontSize: 14, marginBottom: 8 }}>
        🚀 {object.source}
      </Text>

      <TouchableOpacity onPress={handleDelete} style={{ alignSelf: 'center', backgroundColor: 'red', padding: 12, width: 300, alignItems: 'center', borderRadius: 99 }}>
        <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>Delete</Text>
      </TouchableOpacity>

      <View style={{ marginBottom: 50 }} />
    </ScrollView>
  );
};

export default ReadMoreScreen;
