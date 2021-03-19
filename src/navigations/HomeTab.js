import React from 'react';
import {View, Text, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {Icon, Badge} from 'react-native-elements';

const BottomTab = createBottomTabNavigator();

function NewsScreen({navigation, route}) {
  // tanpa destructuring props.route
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>News Screen {route.params?.id}</Text>
    </View>
  );
}
function Bookscreen({navigation, route}) {
  // tanpa destructuring props.route
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Books Screen </Text>
    </View>
  );
}
function Userscreen({navigation, route}) {
  // tanpa destructuring props.route
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>User Screen </Text>
    </View>
  );
}

const HomeTab = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => {
        return {
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'News') {
              iconName = focused ? 'message' : 'message';
            } else if (route.name === 'Books') {
              iconName = focused ? 'book' : 'book';
              return (
                <View>
                  <Badge
                    value={99}
                    badgeStyle={{
                      position: 'absolute',
                      left: 18,
                      elevation: 2,
                      backgroundColor: '#ca2c37',
                    }}
                    textStyle={{
                      fontSize: 10,
                    }}
                  />
                  <Icon name={iconName} color={color} size={size} />
                </View>
              );
            } else {
              iconName = focused ? 'account-circle' : 'account-circle';
            }
            return <Icon name={iconName} color={color} size={size} />;
          },
          // tabBarLabel: ({focused, color}) => {
          //   // You can return any component that you like here!
          //   return null;
          // },
        };
      }}
      tabBarOptions={{
        inactiveTintColor: 'lightgray',
        activeTintColor: '#ca2c37',
      }}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="News" component={NewsScreen} />
      <BottomTab.Screen name="Books" component={Bookscreen} />
      <BottomTab.Screen name="Users" component={Userscreen} />
    </BottomTab.Navigator>
  );
};

export default HomeTab;
