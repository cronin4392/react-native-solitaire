import { createStackNavigator } from 'react-navigation';

import GameScreen from './GameScreen';
import StartScreen from './StartScreen';

const Screens = createStackNavigator({
  Start: StartScreen,
  Game: GameScreen,
}, {
  headerMode: 'none',
});

export default Screens;
