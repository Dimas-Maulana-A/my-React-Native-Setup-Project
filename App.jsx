import {StatusBar} from 'react-native';
import React from 'react';
import Navigation from '~navigation';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Navigation />
    </>
  );
};

export default App;
