import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// COMPONENTS
import Introduction from '../Introduction'
import Login from '../Login'
 
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
          screenOptions={{
            headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={Introduction}
        
        //   options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack