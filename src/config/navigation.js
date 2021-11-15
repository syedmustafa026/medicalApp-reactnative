import * as React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Intro1 from '../screens/Intro1';
import Intro2 from '../screens/Intro2';
import Intro3 from '../screens/Intro3';
import Intro4 from '../screens/Intro4';
import Intro5 from '../screens/Intro5';
import Intro6 from '../screens/Intro6';
import Intro7 from '../screens/Intro7';
import Intro8 from '../screens/Intro8';
import Intro9 from '../screens/Intro9';
import Intro11 from '../screens/Intro11';
import Intro10 from '../screens/Intro10';
import Intro17 from '../screens/Intro17';
import Intro20 from '../screens/Intro20';
const Stack = createNativeStackNavigator();
  
  function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
              headerShown: false,
          }}>
          <Stack.Screen name="intro1" component={Intro1} />
          <Stack.Screen name="intro2" component={Intro2} />
          <Stack.Screen name="intro3" component={Intro3} />
          <Stack.Screen name="intro4" component={Intro4} />
          <Stack.Screen name="intro5" component={Intro5} />
          <Stack.Screen name="intro6" component={Intro6} />
          <Stack.Screen name="intro7" component={Intro7} />
          <Stack.Screen name="intro8" component={Intro8} />
          <Stack.Screen name="intro9" component={Intro9} />
          <Stack.Screen name="intro11" component={Intro11} />
          <Stack.Screen name="intro10" component={Intro10} />
          <Stack.Screen name="intro17" component={Intro17} />
          <Stack.Screen name="intro20" component={Intro20} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigation;