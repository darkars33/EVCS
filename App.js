import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState, useEffect, useCallback} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [appReady, setAppReady] = useState(false);

  // const [loaded, error] = useFonts({
  //   'Inter-Black': require('./assets/fonts/Outfit-Regular.ttf'),
  // });

  useEffect(() =>{
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);

        await new Promise(resolve => setTimeout(resolve, 2000));

      } catch (error) {
        console.log(error);
      }finally{
        setAppReady(true);
      }
    }
    prepare();
  },[appReady])

  const onLayOutRootView = useCallback(() =>{
    SplashScreen.hideAsync();
  },[appReady])

  if(!appReady){
    return null;
  }

  return (
    <View style={styles.container} onLayOut={onLayOutRootView}>
      <Text>Darshan</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
