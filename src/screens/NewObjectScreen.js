// import React, { useState } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
// import { launchImageLibrary } from 'react-native-image-picker';
// import WPlusSvg from '../assets/svg/WPlusSvg';
//
// const NewObjectScreen = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [source, setSource] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState("Planet");
//   const [imageUri, setImageUri] = useState(null);
//
//   const categories = ["Planet", "Star", "Asteroid", "Galaxy", "Satellite", "Nebula"];
//
//   // Функция для выбора изображения из галереи
//   const selectImage = () => {
//     launchImageLibrary({ mediaType: 'photo' }, (response) => {
//       if (response.assets && response.assets.length > 0) {
//         setImageUri(response.assets[0].uri);
//       }
//     });
//   };
//
//   return (
//     <ScrollView style={{ padding: 16, backgroundColor: '#032950' }}>
//       <Text style={{ color: "#fff", fontSize: 16, marginBottom: 8 }}>Cover</Text>
//       <TouchableOpacity
//         onPress={selectImage}
//         style={{
//           width: '100%',
//           marginBottom: 18,
//           height: 180,
//           backgroundColor: imageUri ? 'transparent' : '#fff',
//           borderRadius: 16,
//           justifyContent: 'center',
//           alignItems: 'center',
//           overflow: 'hidden',
//         }}
//       >
//         {imageUri ? (
//           <Image
//             source={{ uri: imageUri }}
//             style={{ width: '100%', height: '100%', borderRadius: 16 }}
//             resizeMode="cover"
//           />
//         ) : (
//           <WPlusSvg fill='#F9CF22' />
//         )}
//       </TouchableOpacity>
//
//       {/* Title Input */}
//       <Text style={{ color: "#fff", fontSize: 16, marginBottom: 6 }}>Title</Text>
//       <TextInput
//         style={{
//           backgroundColor: "#fff", color: "#000", fontSize: 16,
//           borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 12
//         }}
//         placeholder="Enter title"
//         placeholderTextColor="#888"
//         value={title}
//         onChangeText={setTitle}
//       />
//
//       {/* Description Input */}
//       <Text style={{ color: "#fff", fontSize: 16, marginBottom: 6 }}>Description</Text>
//       <TextInput
//         style={{
//           backgroundColor: "#fff", color: "#000", fontSize: 16,
//           borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 12
//         }}
//         placeholder="Enter description"
//         placeholderTextColor="#888"
//         value={description}
//         onChangeText={setDescription}
//       />
//
//       {/* Source Input */}
//       <Text style={{ color: "#fff", fontSize: 16, marginBottom: 6 }}>Source</Text>
//       <TextInput
//         style={{
//           backgroundColor: "#fff", color: "#000", fontSize: 16,
//           borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 12
//         }}
//         placeholder="Enter source"
//         placeholderTextColor="#888"
//         value={source}
//         onChangeText={setSource}
//       />
//
//       {/* Category Selection */}
//       <Text style={{ color: "#fff", fontSize: 16, marginBottom: 6 }}>Category</Text>
//       <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
//         {categories.map((category) => (
//           <TouchableOpacity
//             key={category}
//             onPress={() => setSelectedCategory(category)}
//             style={{
//               backgroundColor: selectedCategory === category ? '#F9CF22' : '#fff',
//               paddingVertical: 8,
//               paddingHorizontal: 16,
//               borderRadius: 20,
//             }}
//           >
//             <Text style={{ color: "#000", fontSize: 16 }}>{category}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//
//       <TouchableOpacity style={{backgroundColor: '#F9CF22', padding: 16, alignSelf: 'flex-start', width: '100%', alignItems: 'center', borderRadius: 99, marginTop: 12}}>
//         <Text style={{fontSize: 18,  color: '#000', fontWeight: 'bold'}}>
//           Save
//         </Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };
//
// export default NewObjectScreen;

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';
import WPlusSvg from '../assets/svg/WPlusSvg';
import {addObject} from '../redux/slices/objectSlice';

const NewObjectScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [source, setSource] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("Planet");
  const [imageUri, setImageUri] = useState(null);


  const categories = ["Planet", "Star", "Asteroid", "Galaxy", "Satellite", "Nebula"];

  // Функция для выбора изображения из галереи
  const selectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  // Функция для сохранения объекта в Redux
  const saveObject = () => {
    dispatch(addObject({ title, description, source, selectedCategory, imageUri }));
    setTitle('');
    setDescription('');
    setSource('');
    setSelectedCategory('Planet');
    setImageUri(null);
    navigation.goBack();
  };

  return (
    <ScrollView style={{ padding: 16, backgroundColor: '#032950' }}>
      <Text style={{ color: "#fff", fontSize: 16, marginBottom: 8 }}>Cover</Text>
      <TouchableOpacity
        onPress={selectImage}
        style={{
          width: '100%',
          marginBottom: 18,
          height: 180,
          backgroundColor: imageUri ? 'transparent' : '#fff',
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={{ width: '100%', height: '100%', borderRadius: 16 }}
            resizeMode="cover"
          />
        ) : (
          <WPlusSvg fill='#F9CF22' />
        )}
      </TouchableOpacity>

      {/* Title Input */}
      <Text style={{ color: "#fff", fontSize: 16, marginBottom: 6 }}>Title</Text>
      <TextInput
        style={{
          backgroundColor: "#fff", color: "#000", fontSize: 16,
          borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 12
        }}
        placeholder="Enter title"
        placeholderTextColor="#888"
        value={title}
        onChangeText={setTitle}
      />

      {/* Description Input */}
      <Text style={{ color: "#fff", fontSize: 16, marginBottom: 6 }}>Description</Text>
      <TextInput
        style={{
          backgroundColor: "#fff", color: "#000", fontSize: 16,
          borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 12
        }}
        placeholder="Enter description"
        placeholderTextColor="#888"
        value={description}
        onChangeText={setDescription}
      />

      {/* Source Input */}
      <Text style={{ color: "#fff", fontSize: 16, marginBottom: 6 }}>Source</Text>
      <TextInput
        style={{
          backgroundColor: "#fff", color: "#000", fontSize: 16,
          borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 12
        }}
        placeholder="Enter source"
        placeholderTextColor="#888"
        value={source}
        onChangeText={setSource}
      />

      {/* Category Selection */}
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
        onPress={saveObject}
        style={{backgroundColor: '#F9CF22', padding: 16, alignSelf: 'flex-start', width: '100%', alignItems: 'center', borderRadius: 99, marginTop: 12}}
      >
        <Text style={{fontSize: 18,  color: '#000', fontWeight: 'bold'}}>
          Save
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default NewObjectScreen;
