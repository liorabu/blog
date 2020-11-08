import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/contexts/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import EditScreen from './src/screens/EditScreen';
import CreateScreen from './src/screens/CreateScreen';

import { Feather, EvilIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

function App() {
  return <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
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
        options={({ navigation,route }) =>
          ({
            title: 'Blogs List',
            headerRight: () =>
              <TouchableOpacity onPress={() => navigation.navigate('Edit',{id:route.params.id})}>
                <EvilIcons name="pencil" size={35} />
              </TouchableOpacity>
          })} />

      <Stack.Screen
        name="Create"
        component={CreateScreen}
        options={{ title: 'Blogs List' }} />

<Stack.Screen
        name="Edit"
        component={EditScreen}
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