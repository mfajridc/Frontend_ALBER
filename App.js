import React, {useEffect, useState} from 'react';
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
  PCSSetting,
  Excavator,
  Forklift,
  SubmissionTracking,
  ProcessOrder,
  ProcessOrderPCS,
  HistoryOrder,
  Tracking,
  APIchange,
} from './src/pages';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Font from 'expo-font'; // Import expo-font
import {Storage} from 'expo-storage';

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false); // Add fontLoaded state
  useEffect(() => {
    // Load and register the custom font
    async function loadFont() {
      await Font.loadAsync({
        'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'), // Replace with the correct font path
      });
      setFontLoaded(true);
    }

    loadFont();

    (async () => {
      const url = await Storage.getItem({key: `api-url`});
      if (!url)
        await Storage.setItem({
          key: `api-url`,
          value: 'https://7e90-182-1-75-16.ngrok-free.app',
        });
    })();
  }, []);

  if (!fontLoaded) {
    return null; // Return null or a loading indicator while the font is loading
  }
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
          name="PCSSetting"
          component={PCSSetting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProcessOrder"
          component={ProcessOrder}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProcessOrderPCS"
          component={ProcessOrderPCS}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HistoryOrder"
          component={HistoryOrder}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tracking"
          component={Tracking}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="APIchange"
          component={APIchange}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
