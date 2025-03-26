// import React, { useState, useEffect } from 'react';
// import { View, Text, ImageBackground, Image, TouchableOpacity, Animated, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import WPlusSvg from '../assets/svg/WPlusSvg';
// import MoveRoketSvg from '../assets/svg/MoveRoketSvg';
//
// const { width, height } = Dimensions.get('window');
//
// const GameProccesScreen = () => {
//   const navigation = useNavigation();
//   const [rocketX, setRocketX] = useState(width / 2 - 50);
//   const [fallingItems, setFallingItems] = useState(
//     Array.from({ length: 6 }, (_, i) => ({
//       id: i,
//       y: new Animated.Value(0),
//       x: Math.random() * width,
//       type: Math.random() > 0.5 ? require('../assets/img/3d1.png') : require('../assets/img/3d2.png')
//     }))
//   );
//   const rocketWidth = 100;
//
//   useEffect(() => {
//     fallingItems.forEach(item => {
//       Animated.loop(
//         Animated.timing(item.y, {
//           toValue: height,
//           duration: Math.random() * 4000 + 3000,
//           useNativeDriver: false
//         })
//       ).start();
//     });
//   }, []);
//
//   useEffect(() => {
//     const interval = setInterval(() => {
//       fallingItems.forEach(item => {
//         item.y.addListener(({ value }) => {
//           if (
//             value >= height - 150 &&
//             item.x >= rocketX &&
//             item.x <= rocketX + rocketWidth
//           ) {
//             navigation.navigate('Lose');
//           }
//         });
//       });
//     }, 100);
//     return () => clearInterval(interval);
//   }, [rocketX]);
//
//   return (
//     <ImageBackground
//       source={require('../assets/img/Layer1222.png')}
//       style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
//     >
//       {fallingItems.map(item => (
//         <Animated.Image
//           key={item.id}
//           source={item.type}
//           style={{ position: 'absolute', top: item.y, left: item.x, width: 50, height: 50 }}
//           resizeMode="contain"
//         />
//       ))}
//
//       <Image
//         source={require('../assets/img/Group20459.png')}
//         style={{ position: 'absolute', bottom: 80, left: rocketX, width: rocketWidth, height: 100 }}
//         resizeMode="contain"
//       />
//
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 20, width: width - 40 }}>
//         <TouchableOpacity onPress={() => setRocketX(prev => Math.max(prev - 50, 0))}>
//           <MoveRoketSvg />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setRocketX(prev => Math.min(prev + 50, width - rocketWidth))}>
//           <View style={{ transform: [{ scaleX: -1 }] }}>
//             <MoveRoketSvg />
//           </View>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };
//
// export default GameProccesScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WPlusSvg from '../assets/svg/WPlusSvg';
import MoveRoketSvg from '../assets/svg/MoveRoketSvg';

const { width, height } = Dimensions.get('window');

const GameProccesScreen = () => {
  const navigation = useNavigation();
  const [rocketX, setRocketX] = useState(width / 2 - 50);
  const [score, setScore] = useState(0);
  const [fallingItems, setFallingItems] = useState(
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      y: new Animated.Value(0),
      x: Math.random() * width,
      type: Math.random() > 0.6 ? require('../assets/img/coin.png') : (Math.random() > 0.5 ? require('../assets/img/3d1.png') : require('../assets/img/3d2.png'))
    }))
  );
  const rocketWidth = 100;

  useEffect(() => {
    fallingItems.forEach(item => {
      Animated.loop(
        Animated.timing(item.y, {
          toValue: height,
          duration: Math.random() * 4000 + 3000,
          useNativeDriver: false
        })
      ).start();
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fallingItems.forEach(item => {
        item.y.addListener(({ value }) => {
          if (
            value >= height - 150 &&
            item.x >= rocketX &&
            item.x <= rocketX + rocketWidth
          ) {
            if (item.type === require('../assets/img/coin.png')) {
              setScore(prevScore => prevScore + 100);
              item.y.setValue(0);
              item.x = Math.random() * width;
            } else {
              navigation.navigate('Lose', {score});
            }
          }
        });
      });
    }, 100);
    return () => clearInterval(interval);
  }, [rocketX]);

  return (
    <ImageBackground
      source={require('../assets/img/Layer1222.png')}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text style={{ position: 'absolute', top: 50, fontSize: 24, fontWeight: 'bold', color: 'white' }}>Score: {score}</Text>
      {fallingItems.map(item => (
        <Animated.Image
          key={item.id}
          source={item.type}
          style={{ position: 'absolute', top: item.y, left: item.x, width: 50, height: 50 }}
          resizeMode="contain"
        />
      ))}

      <Image
        source={require('../assets/img/Group20459.png')}
        style={{ position: 'absolute', bottom: 80, left: rocketX, width: rocketWidth, height: 100 }}
        resizeMode="contain"
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 20, width: width - 40 }}>
        <TouchableOpacity onPress={() => setRocketX(prev => Math.max(prev - 50, 0))}>
          <MoveRoketSvg />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRocketX(prev => Math.min(prev + 50, width - rocketWidth))}>
          <View style={{ transform: [{ scaleX: -1 }] }}>
            <MoveRoketSvg />
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default GameProccesScreen;
