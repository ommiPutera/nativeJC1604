import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  Image,
  TextInput,
  View,
  Button,
  Alert,
} from 'react-native';
import {styles} from './styles';

const App = () => {
  // ? usestate hanya bisa dipakai di function component
  // ? usestate adalah function yang return array yang panjangnya selalu 2
  // ? array ke-nol berisi data yang ada distate
  // ? array ke-1 berisi function yang berfungsi untuk merubah state
  const [input, setinput] = useState(''); //? fungsinya sama seprti state di class component
  const [nama, setnama] = useState('dino');

  // ? component didmount di hooks
  // useEffect(() => {
  //   //? function yang didalam return adalah component will unmount
  //   return () => {};
  // }, []);

  // ? ini component didupdate
  // useEffect(() => {});

  const onPencetPress = () => {
    console.log('line 18');
    Alert.alert('ini alert', 'pesan aja');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.kotak}>
        <Text>1</Text>
      </View>
      <View style={styles.kotak}>
        <Text>2</Text>
        {/* <Button title="pencet" onPress={onPencetPress} /> */}
      </View>
      <View style={[styles.kotak, styles.kotak1]}>
        <Text>3</Text>
        <TextInput
          style={{borderWidth: 1, width: 100}}
          value={input}
          onChangeText={text => setinput(text)}
          placeholder="isi text"
          // keyboardType="numeric"
        />
        <TextInput
          style={{borderWidth: 1, width: 100}}
          value={nama}
          onChangeText={text => setnama(text)}
          placeholder="isi text"
          // keyboardType="numeric"
        />
      </View>
      <View style={styles.kotak}>
        <Text>2</Text>
        {/* <Button title="pencet" onPress={onPencetPress} /> */}
      </View>

      {/* <View>
        <Image
          style={{width: 100, height: 100, borderRadius: 50}} //* jangan lupa dikasih style height dan width
          source={{
            uri:
              'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80',
          }}
          // source={require('./image/wp6151259.jpg')} //* cara untuk pake foto yang ada didalam project
        />
      </View> */}
    </ScrollView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     // height: '100%',
//     flexDirection: 'row',
//     flex: 1,
//     backgroundColor: 'steelblue',
//   },
//   kotak: {
//     backgroundColor: 'yellow',
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   kotak1: {
//     backgroundColor: 'pink',
//   },
// });

export default App;
