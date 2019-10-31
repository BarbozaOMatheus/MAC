import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Main from "./pages/main/";
import Config from "./pages/conf/";
import Sobre from "./pages/sobre/";
import Tempo from "./pages/tempo/";
import Emergency from './pages/emergency/';

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
    Emergency: {
      screen: Emergency,
    },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
);
export default createAppContainer(AppNavigator);


