/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
 import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
 import Header from './components/Header';
 import StartGameScreen from './screens/StartGameScreen';
 import GameScreen from './screens/GameScreen';
 import GameOverScreen from './screens/GameOverScreen';
 /*import * as Font from 'expo-font';
 import {AppLoading} from 'expo';
*/
/* const fetchFonts = () =>{
  return Font.loadAsync({
    'open-sans': require('.assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('.assets/fonts/OpenSans-Bold.ttf'),
  });
 };
*/
 export default function App(){

  const [userNumber,setUserNumber]=useState();
  const [guessRounds,setGuessRounds]=useState(0);
 /* const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading startAsync={fetchFonts} 
    onFinish={() => setDataLoaded(true)}
    onError={(err)=>console.log(err)}/>
  }*/

  const configureNewGameHandler = () =>{
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = (selectedNumber) =>{
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = numOfRounds =>{
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler}/>;
 
  if (userNumber && guessRounds<=0) {
      content=(<GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>); 
  } else if (guessRounds>0) {
    content = (<GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>);
  }

  return (
    <SafeAreaView style ={styles.screen}>
      <Header title ="Guess a number"/>
      {content}
    </SafeAreaView>  
    );
 }


const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});


/*
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

*/
