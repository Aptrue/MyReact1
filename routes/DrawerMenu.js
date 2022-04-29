import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();



function MyDrawerMenu() {
  return (

    <NavigationContainer>
    <Drawer.Navigator screenOptions={

      {
        headerStyle: { backgroundColor: '#E535F3' }, 
        drawerContentStyle: { 
          // backgroundColor: '#E535F3', 
        },
        
      }


    }>
      <Drawer.Screen name="Home" component={Home}  options={ { backgroundColor: '#E535F3' }}/>
      
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawerMenu;