import React, {useState, useContext, createContext} from 'react';

const ListContext = createContext();

const ListProvider = (props) => {
  const [locationList, setLocationList] = useState([]);

  const addLocation = (location) => {
    setLocationList((list) => {
      // TODO: add lat long pra pegar temperatura na lista
      const newItem = {id: location.name, title: location.name};

      return [newItem, ...list];
    });
  };

  return (
    <ListContext.Provider value={{locationList, addLocation}} {...props} />
  );
};

export const useList = () => {
  const value = useContext(ListContext);
  return value;
};

export default ListProvider;
