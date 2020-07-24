import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import logo from './assets/instagram.png';
import Feed from './pages/Feed';
const App = createStackNavigator();

const Routes = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: <Image source={logo} />,
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
      }}>
      <App.Screen name="Feed" component={Feed} />
    </App.Navigator>
  );
};

export default Routes;
