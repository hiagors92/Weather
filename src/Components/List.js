import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import ListItem from './ListItem';
import {useList} from '../Providers/ListProvider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

const List = () => {
  const {locationList} = useList();
  const renderItem = ({item}) => (
    <View>
      <ListItem {...item} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={locationList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default List;
