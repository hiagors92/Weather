import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native';
import ListItem from './ListItem';
import {useList} from '../Providers/ListProvider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  emptyList: {
    color: '#566078',
    fontSize: 18,
    alignSelf: 'center',
  },
});

const List = () => {
  const {locationList} = useList();
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <ListItem {...item} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {locationList.length ? (
        <FlatList
          data={locationList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.emptyList}>Lista vazia</Text>
      )}
    </SafeAreaView>
  );
};

export default List;
