import * as React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Stack } from 'native-base';
import Home from './src/screens/Home';
import Intro1 from '../screens/Intro1';
import Intro2 from '../screens/Intro2';
import Intro3 from '../screens/Intro3';
import Intro4 from '../screens/Intro4';
import Intro10 from '../screens/Intro10';
import Intro17 from '../screens/Intro17';
import Intro20 from '../screens/Intro20';
import Blank from '../screens/Intro19'

  const Stack = createNativeStackNavigator();
  
  function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="intro1" component={Intro1} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigation;