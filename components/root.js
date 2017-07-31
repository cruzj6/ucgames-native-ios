import { StackNavigator } from 'react-navigation';

import TopTracked from './topTracked';
import GameInfo from './gameInfo';

const Root = StackNavigator({
  Home: { screen: TopTracked },
  GameInfo: { screen: GameInfo },
});

export default Root;
