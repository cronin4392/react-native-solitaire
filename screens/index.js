import { createSwitchNavigator, createAppContainer } from "react-navigation";

import GameScreen from "./GameScreen";
import GameOverScreen from "./GameOverScreen";
import StartScreen from "./StartScreen";
import {connect} from "react-redux"
const Screens = createAppContainer(
  createSwitchNavigator({
    Start: StartScreen,
    Game: GameScreen,
    GameOver: GameOverScreen
  })
);

export default Screens;
