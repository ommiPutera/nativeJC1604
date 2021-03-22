import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Userscreen({navigation, route}) {
  // tanpa destructuring props.route
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text>User Screen </Text>
      <Button title="buka drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}
