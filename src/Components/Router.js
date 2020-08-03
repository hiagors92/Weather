import {StackNavigator} from 'react-navigation';

import index from './Scenes/List';
import MapScreen from './MapScreen';

export const Routes = StackNavigator({
  HomeScreen: {
    screen: index,
    navigationOptions: {
      title: 'HomeScreen',
    },
  },
  MapScreen: {
    screen: MapScreen,
    navigationOptions: {
      title: 'MapScreen',
    },
  },
});
