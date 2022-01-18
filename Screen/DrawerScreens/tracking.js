// tracking;

import React, {Component} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header';

export default class tracking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.props.navigation.addListener('willFocus', () => {});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{flex: 1}}
          data={[1, 2, 3, 4]}
          renderItem={({item}) => <TrackingItemCell data={item} />}
        />
      </View>
    );
  }
}

export class TrackingItemCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <View
        style={{
          //  height: 10,
          margin: 10,
          width: '100%',
          backgroundColor: 'gray',
        }}>
        <Text>{this.props.data}</Text>
      </View>
    );
  }
}
