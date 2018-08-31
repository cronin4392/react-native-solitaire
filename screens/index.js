import { createSwitchNavigator } from 'react-navigation';

import GameScreen from './GameScreen';
import GameOverScreen from './GameOverScreen';
import StartScreen from './StartScreen';

const Screens = createSwitchNavigator({
  Start: StartScreen,
  Game: GameScreen,
  GameOver: GameOverScreen,
});

export default Screens;
