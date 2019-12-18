import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';

const StackNavigatorApp = createStackNavigator(
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
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

const AppNavigator = createDrawerNavigator(
  {
    Login: StackNavigatorApp,
    Home: Home,
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AppNavigator);
