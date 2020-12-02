import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps181223Navigator from '../features/Maps181223/navigator';
import Additem181222Navigator from '../features/Additem181222/navigator';
import Maps181218Navigator from '../features/Maps181218/navigator';
import UserProfile181214Navigator from '../features/UserProfile181214/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps181223: { screen: Maps181223Navigator },
Additem181222: { screen: Additem181222Navigator },
Maps181218: { screen: Maps181218Navigator },
UserProfile181214: { screen: UserProfile181214Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
