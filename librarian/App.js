// Import react-navigation which allows for easy navigation use
import { StackNavigator } from 'react-navigation';
// Imports SearchScreen and BookScreen components from other
// files to use them for our navigation
import SearchScreen from './SearchScreen';
import BookScreen from './BookScreen';

/*
  Our App will rely on a StackNavigator to move between screens
  Here we define 2 screens: search and book
  Search - Allows us to search books by title
  Book - Allows us to see details about a particular book
*/
const App = StackNavigator({
  // Appears to follow order {name}: { {type}: {component} }
  Search: { screen: SearchScreen },
  Details: { screen: BookScreen }
});

export default App;
