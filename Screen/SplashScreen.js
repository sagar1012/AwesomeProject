// Import React and Component
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, Text, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {mySingleton} from '../LocalDataStore';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then(value => {
        navigation.replace(value === null ? 'Auth' : 'BottomTab'),
          mySingleton.getInstance().setUserEmail(value);
      });
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Image
        source={require('./DrawerScreens/assets/splace.jpg')}
        style={{height: '120%', width: '100%'}}
      /> */}
      <Text
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
          fontSize: 24,
          position: 'absolute',
        }}>
        Splace Screen
      </Text>
      <ActivityIndicator
        animating={animating}
        color="#000"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
    position:'absolute',
  },
});
