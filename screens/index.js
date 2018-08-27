import { createSwitchNavigator } from 'react-navigation';

import GameScreen from './GameScreen';
import StartScreen from './StartScreen';

const Screens = createSwitchNavigator({
  Start: StartScreen,
  Game: GameScreen,
});

export default Screens;
