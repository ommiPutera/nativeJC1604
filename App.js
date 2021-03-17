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
import {MenuIcon} from './components';
const App = () => {
  const [data] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const renderMenu = () => {
    return data.map((val, index) => {
      return <MenuIcon key={index} data={val} />;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ca2c37" barStyle="light-content" />

      <View style={{flex: 1, marginTop: 20}}>
        <Text style={{fontSize: 12, color: 'white', marginHorizontal: 10}}>
          Dundler Mifflin, Inc
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
            paddingHorizontal: 10,
          }}>
          <View>
            <Text style={{fontSize: 30, color: 'white', fontWeight: '700'}}>
              Michael Scott
            </Text>
            <Text style={{color: 'white'}}>General Manager</Text>
          </View>
          <View>
            <Image
              style={{height: 70, width: 70, borderRadius: 35}}
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png',
              }}
            />
          </View>
        </View>
        <View
          style={{
            height: 150,
            backgroundColor: 'white',
            borderRadius: 5,
            flexWrap: 'wrap',
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 15,
            marginHorizontal: 10,
          }}>
          {renderMenu()}
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: 'white',
              height: 60,
              width: 200,
              marginHorizontal: 5,

              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>1</Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: 60,
              width: 200,
              marginHorizontal: 5,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>2</Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: 60,
              width: 200,
              marginHorizontal: 5,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>3</Text>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}></View>
    </SafeAreaView>
  );
};

export default App;
