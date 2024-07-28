import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback, useEffect} from 'react';
import LoginScreen from './App/Screen/LoginScreen/LoginScreen';

SplashScreen.preventAutoHideAsync();
export default function App() {
  
  const [fontsLoaded] = useFonts({
    'Outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'Outfit-SemiBold': require('./assets/fonts/Outfit-SemiBold.ttf'),
  })

  useEffect(() =>{
    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  return (
    <View style={styles.container}>
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
});
