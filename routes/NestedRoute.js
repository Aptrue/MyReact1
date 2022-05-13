import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home';
import Detalhes from '../screens/detalhes'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentMenu } from '../shared/DrawerContentMenu';


function MyStack() {


}

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
      <Drawer.Screen name="Home" component={Home}

    //   options ={ ({ navigation }) => {
    //     return {
    //       headerTitle: () => <Header title='GameZone' navigation={navigation} />
    //     }
    //   }


    //  }


      />
      <Drawer.Screen name="Detalhes" component={Detalhes} />
    </Drawer.Navigator>

  );
}

export default function NestedRoute({navigation}) {

  const Stack = createNativeStackNavigator();


  return (

    <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen name="Home" component={DrawerMenu} options={ {headerShown: false}} />
    </Stack.Navigator>


    </NavigationContainer>
  );




}


