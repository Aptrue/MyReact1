import 'react-native-gesture-handler';
import  React ,{ useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginStackNavigation from './routes/loginStack';
import NestedRoute from './routes/NestedRoute';
import { useLoadedToken } from './hooks/useLoadedToken';

export default function App() {

const[estado, setEstado]=useState(false);
const[protype, setProperty]=useState({
 name: "" , idade: "", genero: ""
});

const isLoadingComplete = useLoadedToken();




            if(isLoadingComplete){
              return (
                <NestedRoute/>
              );

            } else {

               return <LoginStackNavigation/>



            }








}



