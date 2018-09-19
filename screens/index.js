import { createSwitchNavigator, createAppContainer } from "react-navigation";

import GameScreen from "./GameScreen";
import GameScreen2 from "./GameScreen2";
import GameOverScreen from "./GameOverScreen";
import NewGameScreen from "./NewGameScreen";
import StartScreen from "./StartScreen";

const Screens = createAppContainer(
  createSwitchNavigator({
    // Start: StartScreen,
    Game: GameScreen2,
    GameOver: GameOverScreen
  })
);

export default Screens;
