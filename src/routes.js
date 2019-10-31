import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Main from "./pages/main";
import Config from "./pages/config";
import Sobre from "./pages/sobre";
import Tempo from "./pages/tempo";

const AppNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: Main,
    },
    Config: {
      screen: Config,
    },
    Sobre: {
      screen: Sobre,
    },
    Tempo: {
      screen: Tempo,
    },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
);
export default createAppContainer(AppNavigator);


