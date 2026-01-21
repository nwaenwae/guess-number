import {SetStateAction, useState} from "react";
import {StyleSheet, ImageBackground} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context"
import {LinearGradient} from "expo-linear-gradient";
import StartGameScreen from "@/screens/StartGameScreen";
import GameScreen from "@/screens/GameScreen";
import Colors from "@/constants/colors";

export default function Index() {
  const [userNumber, setUserNumber] = useState();

  function pickNumberHandler(pickedNumber: SetStateAction<undefined>) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler}/>

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber}/>
  }

  return (
    <SafeAreaProvider>
      <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
        <ImageBackground
          source={require('../assets/images/background.png')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});