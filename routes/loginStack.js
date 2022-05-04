import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Login from "../screens/login";


export default function LoginStackNavigation(){

    const stack = createNativeStackNavigator();


     return <NavigationContainer>

                            <stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#E535F3' },  }} >
                              <stack.Screen name='Login'   component={Login} options={{ headerShown: false }}></stack.Screen>
                              <stack.Screen name='Home'   component={Home} options={{ headerShown: false }}></stack.Screen>
                            </stack.Navigator>
          </NavigationContainer>

}