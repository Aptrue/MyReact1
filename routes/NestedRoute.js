import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home';
import Todo from '../screens/todo';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentMenu } from '../shared/DrawerContentMenu';




function tabs({navigation}) {


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
      <Drawer.Screen name="Tarefas" component={Todo}/>
    </Drawer.Navigator>

  );
}

export default function NestedRoute(){

    const stack = createNativeStackNavigator();


     return <NavigationContainer>

                            <stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#E535F3' },  }} >
                              <stack.Screen name='Home'   component={tabs} options={{ headerShown: false }}></stack.Screen>
                              <stack.Screen name='tarefa' component={tabs} options={{ headerShown: false }}></stack.Screen>
                            </stack.Navigator>

          </NavigationContainer>

}


