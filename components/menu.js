import React from 'react';

import {View, Text} from 'react-native';

export const MenuIcon = props => {
  return (
    <View
      style={{
        width: '25%',
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink',
      }}>
      <Text>{props.data}</Text>
    </View>
  );
};
