import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';

const RNApp = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {header: null, gesturesEnabled: true},
    },
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        gesturesEnabled: true,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

const AppNavigator = createDrawerNavigator({
  Home: RNApp,
});

export default createAppContainer(AppNavigator);
