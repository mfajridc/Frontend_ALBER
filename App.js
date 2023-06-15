import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  SplashScreen,
  Register,
  Login,
  HomeScreen,
  HomePCS,
  WelcomePage,
  NewRequest,
  WheelLoader,
  AlberVisualization,
  Setting,
  Excavator,
  Forklift,
  SubmissionTracking,
  ProcessOrder,
  HistoryOrder,
} from './src/pages';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomePCS"
          component={HomePCS}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewRequest"
          component={NewRequest}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WheelLoader"
          component={WheelLoader}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Excavator"
          component={Excavator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Forklift"
          component={Forklift}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AlberVisualization"
          component={AlberVisualization}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SubmissionTracking"
          component={SubmissionTracking}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProcessOrder"
          component={ProcessOrder}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HistoryOrder"
          component={HistoryOrder}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
