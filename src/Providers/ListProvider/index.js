import React, {useState, useContext, createContext, useEffect} from 'react';
import uuid from 'react-native-uuid';
import * as Storage from './Storage';
const ListContext = createContext();

const ListProvider = (props) => {
  const [locationList, setLocationList] = useState([]);
  useEffect(() => {
    Storage.readAllItems().then((items) => {
      const sortedItems = items.sort((a, b) => b.timestamp - a.timestamp);
      setLocationList(sortedItems);
    });
  }, []);
  const addLocation = ({name, latlong}) => {
    setLocationList((list) => {
      const newItem = {id: uuid.v4(), title: name, latlong};
      Storage.createItem(newItem.id, newItem);
      return [newItem, ...list];
    });
  };

  const removeLocation = (removedId) => {
    setLocationList((list) => {
      Storage.deleteItem(removedId);
      return list.filter(({id}) => id !== removedId);
    });
  };

  return (
    <ListContext.Provider
      value={{locationList, addLocation, removeLocation}}
      {...props}
    />
  );
};

export const useList = () => {
  const value = useContext(ListContext);
  return value;
};

export default ListProvider;
