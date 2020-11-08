import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/contexts/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Stack = createStackNavigator();

function App() {
  return <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={{ title: 'Blogs List' }}
        options={({ navigation }) => ({
          title: 'Blogs List',
          headerLeft: () =>
            <TouchableOpacity onPress={() =>
              navigation.navigate('Create')}>
              <Feather name="plus" size={30} />
            </TouchableOpacity>
        })}
         />
      <Stack.Screen
        name="Show"
        component={ShowScreen}
        options={{ title: 'Blogs List' }} />
      <Stack.Screen
        name="Create"
        component={CreateScreen}
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