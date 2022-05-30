import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home';
import Detalhes from '../screens/detalhes'
import Login from '../screens/login'
import SearchPage from '../screens/SeachPage';
import { SettingsPage } from '../screens/SettingsPage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentMenu } from '../shared/DrawerContentMenu';



function DrawerMenu({navigation}) {


    const Drawer = createDrawerNavigator();

  return (

    <Drawer.Navigator drawerContent={props => <DrawerContentMenu {...props} drawer/>}

    screenOptions={

      {
        headerStyle: { backgroundColor: '#E535F3' },
        drawerContentStyle: {
          // backgroundColor: '#E535F3',
        },

        drawerPosition: 'left',
        headerShown: false

      }


    }

    >
      <Drawer.Screen name="Home" component={Home}/>
    </Drawer.Navigator>

  );
}

export default function NestedRoute({navigation}) {

  const Stack = createNativeStackNavigator();


  return (

    <NavigationContainer>

    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#E535F3'},
      }}>
      <Stack.Screen name="Home" component={DrawerMenu} options={ {headerShown: false}} />
      <Stack.Screen name="Search" component={SearchPage} options={ {headerShown: true}} />
      <Stack.Screen name="Detalhes" component={Detalhes} options={ {headerShown: true}}/>
      <Stack.Screen name='Login'   component={Login} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name='Definições' component={SettingsPage}  options={ {headerShown: true}}></Stack.Screen>
      <Stack.Screen name='Perfil' component={SettingsPage}  options={ {headerShown: true}}></Stack.Screen>
    </Stack.Navigator>


    </NavigationContainer>
  );




}


