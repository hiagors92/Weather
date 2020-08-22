import React from 'react';
import {View, StyleSheet} from 'react-native';
import TopBar from './Components/TopBar';
import List from './Components/List';
import Footer from './Components/Footer';
import ListProvider from './Providers/ListProvider';

const styles = StyleSheet.create({
  full: {
    height: '100%',
  },
});

const App = () => (
  <ListProvider>
    <View>
      <TopBar />
      <View style={styles.full}>
        <List />
        <Footer />
      </View>
    </View>
  </ListProvider>
);

export default App;
