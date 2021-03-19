import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import StackNav from './src/navigations/stackNav';

const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default App;
