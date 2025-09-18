import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import HostSessionScreen from './src/screens/HostSessionScreen';
import JoinSessionScreen from './src/screens/JoinSessionScreen';
import MusicPlayerScreen from './src/screens/MusicPlayerScreen';
import DeviceManagerScreen from './src/screens/DeviceManagerScreen';

// Import providers
import { BluetoothProvider } from './src/providers/BluetoothProvider';
import { WiFiP2PProvider } from './src/providers/WiFiP2PProvider';
import { AudioSyncProvider } from './src/providers/AudioSyncProvider';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BluetoothProvider>
        <WiFiP2PProvider>
          <AudioSyncProvider>
            <NavigationContainer>
              <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{
                  headerStyle: {
                    backgroundColor: '#1e1e1e',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              >
                <Stack.Screen 
                  name="Home" 
                  component={HomeScreen} 
                  options={{ title: 'Multi-Device Surround Audio' }}
                />
                <Stack.Screen 
                  name="HostSession" 
                  component={HostSessionScreen} 
                  options={{ title: 'Host Session' }}
                />
                <Stack.Screen 
                  name="JoinSession" 
                  component={JoinSessionScreen} 
                  options={{ title: 'Join Session' }}
                />
                <Stack.Screen 
                  name="MusicPlayer" 
                  component={MusicPlayerScreen} 
                  options={{ title: 'Music Player' }}
                />
                <Stack.Screen 
                  name="DeviceManager" 
                  component={DeviceManagerScreen} 
                  options={{ title: 'Connected Devices' }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </AudioSyncProvider>
        </WiFiP2PProvider>
      </BluetoothProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
