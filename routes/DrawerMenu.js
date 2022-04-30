import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentMenu } from '../shared/DrawerContentMenu';
import Todo from '../screens/todo';
import Detalhes from '../screens/detalhes'


const Drawer = createDrawerNavigator();



function MyDrawerMenu() {
  return (

    <NavigationContainer>
    <Drawer.Navigator drawerContent={props => <DrawerContentMenu {...props} />}
    
    screenOptions={

      {
        headerStyle: { backgroundColor: '#E535F3' }, 
        drawerContentStyle: { 
          // backgroundColor: '#E535F3', 
        },
        
      }


    }
    
    >
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Tarefas" component={Todo}/>
      <Drawer.Screen name="Detalhes" component={Detalhes}/>
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawerMenu;