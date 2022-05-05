import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home';
import Todo from '../screens/todo';
import Detalhes from '../screens/detalhes'
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
      <Drawer.Screen name="Home" component={Home}

    //   options ={ ({ navigation }) => {
    //     return {
    //       headerTitle: () => <Header title='GameZone' navigation={navigation} />
    //     }
    //   }


    //  }


      />
      <Drawer.Screen name="Tarefas" component={Todo}/>
      <Drawer.Screen name="Detalhes" component={NestedRoute}/>
    </Drawer.Navigator>

  );
}

export default function NestedRoute({navigation}) {


  const Tab = createBottomTabNavigator();

  return (

    <NavigationContainer>
    <Tab.Navigator
    initialRouteName={DrawerMenu}
    activeColor="#E535F3"
    labelStyle={{ fontSize: 12 }}
    barStyle={{ backgroundColor: "#fff" }}

    screenOptions={

{

  headerShown: false

}


}

    >

     <Tab.Screen
        name="Homee"
        component={DrawerMenu}
        options={{
          tabBarLabel: 'Home',
          tabBarBadge: 3,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="task"
        component={Todo}
        options={
          {
          tabBarLabel: 'Tarefass',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-check-outline" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>

    </NavigationContainer>
  );
}


