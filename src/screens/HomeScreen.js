import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import WPlusSvg from '../assets/svg/WPlusSvg';
import SettingsSvg from '../assets/svg/SettingsSvg';

const HomeScreen = ({ navigation, route }) => {
  const objects = useSelector(state => state.objects.objects);
  const selectedCategory = route.params?.selectedCategory || "All";

  // Фильтруем объекты по выбранной категории
  const filteredObjects = selectedCategory === "All"
    ? objects
    : objects.filter(obj => obj.selectedCategory === selectedCategory);

  return (
    <>
      <ScrollView style={{backgroundColor: '#032950', padding: 16}}>
        {filteredObjects.length > 0 ? (
          filteredObjects.map((object, index) => (
            <View
              key={index}
              style={{
                backgroundColor: '#053362',
                padding: 16,
                borderRadius: 16,
                flexDirection: 'row',
                marginBottom: 8,
              }}>
              {object.imageUri ? (
                <Image
                  source={{uri: object.imageUri}}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 16,
                    marginRight: 8,
                  }}
                  resizeMode="cover"
                />
              ) : (
                <View
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 16,
                    marginRight: 8,
                    backgroundColor: '#ccc',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#000'}}>No Image</Text>
                </View>
              )}
              <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                    width: '50%',
                    marginBottom: 6,
                  }}>
                  {object.title}
                </Text>
                <View
                  style={{
                    backgroundColor: '#FF6E6E',
                    padding: 8,
                    marginBottom: 8,
                    alignSelf: 'flex-start',
                    paddingHorizontal: 12,
                    alignItems: 'center',
                    borderRadius: 99,
                  }}>
                  <Text style={{fontSize: 14, color: '#fff'}}>
                    {object.selectedCategory}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ReadMore', {object, index})
                  }
                  style={{
                    backgroundColor: '#F9CF22',
                    padding: 8,
                    alignSelf: 'flex-start',
                    width: 200,
                    alignItems: 'center',
                    borderRadius: 99,
                  }}>
                  <Text style={{fontSize: 14, color: '#000'}}>Read more</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                textAlign: 'center',
                marginTop: 20,
              }}>
              There are no objects added here yet, it's time to add them!
            </Text>
          </>
        )}
      </ScrollView>
      {!filteredObjects.length > 0 && (
        <Image
          source={require('../assets/img/_0007.png')}
          style={{width: '80%', position: 'absolute', top: 100, right: -20}}
          resizeMode="contain"
        />
      )}

      <TouchableOpacity
        onPress={() => navigation.navigate('Filters')}
        style={{
          padding: 20,
          backgroundColor: '#F9CF22',
          borderRadius: 99,
          position: 'absolute',
          right: 20,
          bottom: 90,
        }}>
        <SettingsSvg />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('NewObject')}
        style={{
          padding: 20,
          backgroundColor: '#F9CF22',
          borderRadius: 99,
          position: 'absolute',
          right: 20,
          bottom: 20,
        }}>
        <WPlusSvg />
      </TouchableOpacity>
    </>
  );
};

export default HomeScreen;
