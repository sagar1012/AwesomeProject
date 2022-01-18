


// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { mySingleton } from '../../LocalDataStore';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Welcome 
            {/* , {mySingleton.getInstance().getUserEmail()} */}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
