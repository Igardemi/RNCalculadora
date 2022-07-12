import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Calculadora} from './src/components/screens/Calculadora';
import {styles} from './styles/appStyle';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Calculadora />
    </SafeAreaView>
  );
};

export default App;
