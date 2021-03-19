import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  Image,
  Dimensions,
  View,
  Platform,
  RefreshControl,
  TouchableWithoutFeedback,
} from 'react-native';
import {Icon, Badge, ListItem} from 'react-native-elements';
import {styles} from '../styles';
import {MenuIcon} from '../components';

const windowHeight = Dimensions.get('screen').height;

const Home = props => {
  const [data] = useState([
    {
      name: 'account-balance-wallet',
      color: 'purple',
      text: 'wallet',
    },
    {
      name: 'article',
      color: 'salmon',
      text: 'article',
    },
    {
      name: 'add-shopping-cart',
      color: 'teal',
      text: 'cart',
    },
    {
      name: 'shop',
      color: '#ca2c37',
      text: 'shop',
    },
    {
      name: 'book',
      color: 'steelblue',
      text: 'book',
    },
    {
      name: 'bug-report',
      color: 'black',
      text: 'bug',
    },
    {
      name: 'credit-card',
      color: 'sandybrown',
      text: 'card',
    },
    {
      name: 'favorite',
      color: 'red',
      text: 'love',
    },
  ]);
  const [page, setpage] = useState('home');

  const onMenuPress = page => {
    setpage(page);
  };

  const OnReimbursePress = () => {
    props.navigation.push('Reim');
  };

  const renderMenu = () => {
    return data.map((val, index) => {
      return <MenuIcon key={index} data={val} />;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ca2c37" barStyle="light-content" />
      <ScrollView>
        <View style={{height: windowHeight / 2, marginTop: 20}}>
          <Text style={{fontSize: 12, color: 'white', marginHorizontal: 10}}>
            Dundler Mifflin, Inc
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: Platform.OS === 'android' ? 10 : 5,
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
              marginBottom: 25,
              marginHorizontal: 10,
            }}>
            {renderMenu()}
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableWithoutFeedback onPress={OnReimbursePress}>
              <View
                style={{
                  backgroundColor: 'white',
                  height: 60,
                  width: 200,
                  marginHorizontal: 5,
                  flexDirection: 'row',
                  borderRadius: 5,
                }}>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'gray'}}>Rp</Text>
                </View>
                <View style={{flex: 5, justifyContent: 'center'}}>
                  <Text style={{fontSize: 12}}>Request</Text>
                  <Text>Reimbursement</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => props.navigation.navigate('Req', {nama: 'willy'})}>
              <View
                style={{
                  backgroundColor: 'white',
                  height: 60,
                  width: 200,
                  marginHorizontal: 5,
                  flexDirection: 'row',
                  borderRadius: 5,
                }}>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon name="calendar-today" color="gray" />
                </View>
                <View style={{flex: 5, justifyContent: 'center'}}>
                  <Text style={{fontSize: 12}}>Request</Text>
                  <Text>Time Off</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <View
              style={{
                backgroundColor: 'white',
                height: 60,
                width: 200,
                marginHorizontal: 5,
                flexDirection: 'row',
                borderRadius: 5,
              }}>
              <View
                style={{
                  flex: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="alarm" color="gray" />
              </View>
              <View style={{flex: 5, justifyContent: 'center'}}>
                <Text style={{fontSize: 12}}>Request</Text>
                <Text>Overtime</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            // height: windowHeight / 3,
            backgroundColor: 'white',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 14,
              paddingVertical: 10,
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 19, fontWeight: '600'}}>Announcement</Text>
            <Text style={{marginTop: 5, color: 'steelblue'}}>View All</Text>
          </View>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>New Family member</ListItem.Title>
              <ListItem.Subtitle>Pam Beesly</ListItem.Subtitle>
            </ListItem.Content>
            <Badge containerStyle={{marginTop: -15, marginRight: -10}} />
            <ListItem.Subtitle style={{marginTop: -15}}>
              12 August 2021
            </ListItem.Subtitle>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>New Family member</ListItem.Title>
              <ListItem.Subtitle>Pam Beesly</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Subtitle style={{marginTop: -15}}>
              12 August 2021
            </ListItem.Subtitle>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>New Family member</ListItem.Title>
              <ListItem.Subtitle>Pam Beesly</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Subtitle style={{marginTop: -15}}>
              12 August 2021
            </ListItem.Subtitle>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>New Family member</ListItem.Title>
              <ListItem.Subtitle>Pam Beesly</ListItem.Subtitle>
            </ListItem.Content>

            <ListItem.Subtitle style={{marginTop: -15}}>
              12 August 2021
            </ListItem.Subtitle>
          </ListItem>
        </View>
      </ScrollView>
      {/* nav button start */}
      {/* <View
        style={{
          backgroundColor: 'white',
          height: windowHeight / 15,
          flexDirection: 'row',
          paddingHorizontal: 5,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.3,

          elevation: 13,
        }}>
        <TouchableWithoutFeedback onPress={() => onMenuPress('home')}>
          <View style={{width: '25%'}}>
            <Icon name="home" color={page === 'home' ? '#ca2c37' : '#c7c7c7'} />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
                color: page === 'home' ? '#ca2c37' : '#c7c7c7',
              }}>
              Home
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => onMenuPress('news')}>
          <View style={{width: '25%'}}>
            <Icon
              name="message"
              color={page === 'news' ? '#ca2c37' : '#c7c7c7'}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
                color: page === 'news' ? '#ca2c37' : '#c7c7c7',
              }}>
              News
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => onMenuPress('books')}>
          <View style={{width: '25%'}}>
            <Badge
              value={99}
              badgeStyle={{
                position: 'absolute',
                right: 20,
                elevation: 10,
                backgroundColor: '#ca2c37',
              }}
              textStyle={{
                fontSize: 10,
              }}
            />
            <Icon
              name="book"
              color={page === 'books' ? '#ca2c37' : '#c7c7c7'}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
                color: page === 'books' ? '#ca2c37' : '#c7c7c7',
              }}>
              Books
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => onMenuPress('users')}>
          <View style={{width: '25%'}}>
            <Icon
              name="account-circle"
              color={page === 'users' ? '#ca2c37' : '#c7c7c7'}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
                color: page === 'users' ? '#ca2c37' : '#c7c7c7',
              }}>
              users
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View> */}
    </SafeAreaView>
  );
};

export default Home;
