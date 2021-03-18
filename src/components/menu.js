import React from 'react';
import {Icon} from 'react-native-elements';
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
      <Icon
        name={props.data.name}
        color={props.data.color}
        // style={{fontSize: 100}}
        size={30}
      />
      <Text>{props.data.text}</Text>
    </View>
  );
};
