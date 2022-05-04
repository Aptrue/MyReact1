
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from '../screens/home';
import Todo from '../screens/todo';






export default function Tabs({navigation}) {


  const Tab = createBottomTabNavigator();

  return (

    <NavigationContainer>
    <Tab.Navigator
    initialRouteName={MyDrawerMenu}
    activeColor="#E535F3"
    labelStyle={{ fontSize: 12 }}
    barStyle={{ backgroundColor: "#fff" }}
    >

     <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarBadge: 3,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="tarefa"
        component={Todo}
        options={
          {
          tabBarLabel: 'Tarefass',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-check-outline" color={color} size={26} />
          ),
        }}
      />
         <Tab.Screen
        name="tarefa"
        component={Todo}
        options={
          {
          tabBarLabel: 'Teste',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-check-outline" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>

    </NavigationContainer>
  );
}




