import { createSwitchNavigator, createAppContainer } from "react-navigation";

import GameScreen from "./GameScreen";
import GameOverScreen from "./GameOverScreen";
import NewGameScreen from "./NewGameScreen";
import StartScreen from "./StartScreen";

const Screens = createAppContainer(
  createSwitchNavigator({
    Start: StartScreen,
    Game: NewGameScreen,
    GameOver: GameOverScreen
  })
);

export default Screens;
