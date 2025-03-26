import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const FiltersScreen = ({ navigation }) => {
  const categories = ["All", "Planet", "Star", "Asteroid", "Galaxy", "Satellite", "Nebula"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <View style={{ flex: 1, alignItems: 'flex-start', backgroundColor: '#032950', padding: 16 }}>
      <Text style={{ color: "#fff", fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Filters</Text>
      <Text style={{ color: "#fff", fontSize: 16, marginBottom: 6 }}>Category</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setSelectedCategory(category)}
            style={{
              backgroundColor: selectedCategory === category ? '#F9CF22' : '#fff',
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "#000", fontSize: 16 }}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        onPress={() => navigation.goBack({ selectedCategory })}
        style={{ backgroundColor: '#F9CF22', padding: 16, position: 'absolute', bottom: 80, alignSelf: 'center', width: '100%', alignItems: 'center', borderRadius: 99 }}>
        <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}>Apply Filters</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FiltersScreen;
