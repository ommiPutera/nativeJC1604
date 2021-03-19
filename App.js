import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './src/navigations/stackNav';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {View, Text, Button} from 'react-native';
import {Icon, Badge} from 'react-native-elements';

const DrawerNav = createDrawerNavigator();

const SettingSscreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Setting Screen</Text>
    </View>
  );
};

const CustomDrawerContent = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="Setting"
          onPress={() => props.navigation.navigate('Setting')}
          activeTintColor={'tomato'}
          icon={() => {
            return (
              <Icon
                name={'cog'}
                type="font-awesome"
                // size={propssize}
                color={'gray'}
              />
            );
          }}
          activeBackgroundColor={'blue'}
        />
      </DrawerContentScrollView>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <DrawerNav.Navigator
      drawerPosition="right"
      drawerType="slide"
      overlayColor={'transparent'}
      drawerContent={props => <CustomDrawerContent {...props} />}
      // screenOptions={({route}) => ({
      //   drawerIcon: ({focused, color, size}) => {
      //     let iconName;
      //     // console.log(route.name)
      //     if (route.name === 'Root') {
      //       iconName = focused ? 'user' : 'user';
      //       return null;
      //     } else if (route.name === 'Setting') {
      //       iconName = focused ? 'cog' : 'cog';
      //     }
      //     // You can return any component that you like here!
      //     // console.log(color)
      //     return (
      //       <Icon
      //         name={iconName}
      //         type="font-awesome"
      //         size={size}
      //         color={color}
      //       />
      //     );
      //   },
      //   drawerLabel: ({focused, color, size}) => {
      //     if (route.name === 'Root') {
      //       return null;
      //     }
      //     return <Text style={{color}}>{route.name}</Text>;
      //   },
      // })}
      drawerContentOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <DrawerNav.Screen
        name="Root"
        component={StackNav}
        options={{
          swipeEnabled: false,
          drawerIcon: () => null,
          drawerLabel: () => null,
        }}
      />
      <DrawerNav.Screen name="Setting" component={SettingSscreen} />
    </DrawerNav.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
