import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import InitialScreen from './src/screens/InitialScreen';

const navigation = createStackNavigator({
  Search: SearchScreen,
  Initial: InitialScreen,
},
{
  initialRouteName: 'Initial',
  defaultNavigationOptions: {
    title: 'Eat-n-Repeat'
  }
})

export default createAppContainer(navigation);