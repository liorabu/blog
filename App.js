import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/contexts/BlogContext';

const Stack = createStackNavigator();

function App() {
     return <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Index"
        screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{ title: 'Blogs List' }} />
      </Stack.Navigator>
    </NavigationContainer>
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};